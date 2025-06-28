import { useFormContext } from "react-hook-form";

import Input from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";

import * as S from "./FormFields.styled";

export default function FormFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <S.Container>
      <Input
        {...register("title")}
        type="text"
        errorMessage={errors.title?.message as string}
        placeholder="게시글 타이틀을 입력해주세요."
      />

      <TextArea
        {...register("body")}
        rows={10}
        errorMessage={errors.body?.message as string}
        placeholder="게시글 내용을 입력해주세요."
      />
    </S.Container>
  );
}
