import { useFormContext } from "react-hook-form";

import Input from "@/components/common/Input";

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
      />

      <textarea {...register("body")} rows={10} />
      {errors.body && <p>{errors.body.message as string}</p>}
    </S.Container>
  );
}
