import { usePathname } from "next/navigation";

import { PATHS } from "@/lib/constants/routes";

import * as S from "./LeftNavBar.styled";

const MENUS = [
  {
    title: "홈",
    path: PATHS.HOME,
  },
  {
    title: "서비스 게시판",
    path: PATHS.ISSUES,
  },
];

export default function LeftNavBar() {
  const currentPath = usePathname();

  const getIsActive = (path: string) => {
    if (path === PATHS.HOME) {
      return currentPath === path;
    }

    return currentPath.startsWith(path);
  };

  return (
    <S.Container>
      <ul>
        {MENUS.map((menu) => (
          <li key={menu.path}>
            <S.CustomLink href={menu.path} isActive={getIsActive(menu.path)}>
              {menu.title}
            </S.CustomLink>
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
