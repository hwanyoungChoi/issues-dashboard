import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/common/Button";
import Loading from "@/components/common/Loading";
import { usePatchIssue } from "@/hooks/mutations/usePatchIssue";
import { usePostIssue } from "@/hooks/mutations/usePostIssue";
import { useGetIssue } from "@/hooks/queries/useGetIssue";
import { PATHS } from "@/lib/constants/routes";

import * as S from "./IssuesEditView.styled";
import FormFields from "../../components/FormFields";

interface IssueForm {
  title: string;
  body: string;
}

const SCHEMA = yup.object().shape({
  title: yup.string().required("타이틀을 입력해주세요."),
  body: yup.string().required("내용을 입력해주세요."),
});

interface Props {
  id?: number;
}

export default function IssuesEditView({ id }: Props) {
  const router = useRouter();

  const isUpdate = !!id;

  const { data: issue, isLoading } = useGetIssue({
    owner: process.env.NEXT_PUBLIC_OWNER!,
    repo: process.env.NEXT_PUBLIC_REPO!,
    issue_number: id!,
  });

  const { mutateAsync: postIssueAsync, isPending: isPosting } = usePostIssue();
  const { mutateAsync: patchIssueAsync, isPending: isPatching } =
    usePatchIssue();

  const methods = useForm<IssueForm>({
    resolver: yupResolver(SCHEMA),
  });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset({
      title: issue?.title ?? "",
      body: issue?.body ?? "",
    });
  }, [issue, reset]);

  const onCreate = async (data: IssueForm) => {
    await postIssueAsync({
      owner: process.env.NEXT_PUBLIC_OWNER!,
      repo: process.env.NEXT_PUBLIC_REPO!,
      title: data.title,
      body: data.body,
    });

    router.replace(PATHS.ISSUES);
  };

  const onUpdate = async (data: IssueForm) => {
    await patchIssueAsync({
      owner: process.env.NEXT_PUBLIC_OWNER!,
      repo: process.env.NEXT_PUBLIC_REPO!,
      issue_number: id!,
      title: data.title,
      body: data.body,
    });

    router.replace(PATHS.ISSUES);
  };

  if (isLoading) {
    return <Loading message="게시글을 불러오는 중입니다." />;
  }
  if (isPosting || isPatching) {
    return <Loading message="게시글을 등록/수정하는 중입니다." />;
  }

  return (
    <S.Container>
      <h2>{isUpdate ? "게시글 수정" : "게시글 등록"}</h2>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(isUpdate ? onUpdate : onCreate)}>
          <FormFields />

          <S.ActionContainer>
            <Button theme="primary" type="submit">
              {isUpdate ? "수정하기" : "등록하기"}
            </Button>
          </S.ActionContainer>
        </form>
      </FormProvider>
    </S.Container>
  );
}
