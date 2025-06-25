import Image from "next/image";

import * as S from "./HomeView.styled";

const IMAGE_SOURCES = [
  "/assets/images/img_homework_1.png",
  "/assets/images/img_homework_2.png",
  "/assets/images/img_homework_3.png",
  "/assets/images/img_homework_4.png",
];

export default function HomeView() {
  return (
    <S.Container>
      <S.Grid>
        {IMAGE_SOURCES.map((src, index) => (
          <S.ImageWrapper key={src}>
            <Image
              src={src}
              alt={`homework ${index + 1}`}
              fill
              objectFit="contain"
            />
          </S.ImageWrapper>
        ))}
      </S.Grid>
    </S.Container>
  );
}
