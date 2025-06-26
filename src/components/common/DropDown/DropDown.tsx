import { ReactNode, useEffect, useRef, useState } from "react";

import * as S from "./DropDown.styled";

interface DropDownMenuItem {
  label: string | ReactNode;
  value: any;
}

interface Props {
  buttonLabel: string | ReactNode;
  items: DropDownMenuItem[];
  direction?: "left" | "right";
  selectedValue?: any;
  onClick: (value: any) => void;
}

export default function DropDown({
  buttonLabel,
  items,
  direction = "right",
  selectedValue,
  onClick,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const isShowRadio = !!selectedValue;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.document.addEventListener("click", handleOutsideClick);

    return () => {
      window.document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const handleMenuItemClick = (value: any) => {
    onClick(value);
    setIsOpen(false);
  };

  return (
    <S.Container ref={containerRef}>
      <S.Button onClick={() => setIsOpen((prev) => !prev)} isActive={isOpen}>
        {buttonLabel}
      </S.Button>

      {isOpen && (
        <S.MenuContainer direction={direction}>
          <S.MenuList>
            {items.map((item) => (
              <li
                key={item.value}
                onClick={() => handleMenuItemClick(item.value)}
              >
                {isShowRadio && (
                  <input
                    type="radio"
                    checked={selectedValue === item.value}
                    readOnly
                  />
                )}
                {item.label}
              </li>
            ))}
          </S.MenuList>
        </S.MenuContainer>
      )}
    </S.Container>
  );
}
