import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

import { Button } from "@/components/common/Button";
import { usePostIssue } from "@/hooks/mutations/usePostIssue";
import { PATHS } from "@/lib/constants/routes";

import * as S from "./IssuesEditView.styled";
import FormFields from "../../components/FormFields";

const SCHEMA = yup.object().shape({
  title: yup.string().required("타이틀을 입력해주세요."),
  body: yup.string().required("내용을 입력해주세요."),
});

interface Props {
  id?: number;
}

export default function IssuesEditView({ id }: Props) {
  const router = useRouter();

  const { mutateAsync: postIssueAsync } = usePostIssue();

  const methods = useForm({
    resolver: yupResolver(SCHEMA),
  });
  const { handleSubmit } = methods;

  const onCreate = async (data: any) => {
    await postIssueAsync({
      owner: process.env.NEXT_PUBLIC_OWNER!,
      repo: process.env.NEXT_PUBLIC_REPO!,
      title: data.title,
      body: data.body,
      issue_number: id,
    });

    router.replace(PATHS.ISSUES);
  };

  return (
    <S.Container>
      <h2>게시글 등록</h2>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onCreate)}>
          <FormFields />

          <S.ActionContainer>
            <Button type="submit">등록하기</Button>
          </S.ActionContainer>
        </form>
      </FormProvider>
    </S.Container>
  );
}
