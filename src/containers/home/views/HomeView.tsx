import Image from "next/image";

import { useAppStore } from "@/store/useAppStore";

import * as S from "./HomeView.styled";

const IMAGE_SOURCES = [
  "/assets/images/img_homework_1.png",
  "/assets/images/img_homework_2.png",
  "/assets/images/img_homework_3.png",
  "/assets/images/img_homework_4.png",
];

export default function HomeView() {
  const contentViewType = useAppStore((state) => state.contentViewType);
  const images =
    contentViewType === "list" ? IMAGE_SOURCES : [...IMAGE_SOURCES].reverse();

  return (
    <S.Container>
      <S.Grid>
        {images.map((src, index) => (
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
