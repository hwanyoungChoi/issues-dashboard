import { useFormContext } from "react-hook-form";

import * as S from "./FormFields.styled";

export default function FormFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <S.Container>
      <input {...register("title")} type="text" />
      {errors.title && <p>{errors.title.message as string}</p>}

      <textarea {...register("body")} rows={10} />
      {errors.body && <p>{errors.body.message as string}</p>}
    </S.Container>
  );
}
