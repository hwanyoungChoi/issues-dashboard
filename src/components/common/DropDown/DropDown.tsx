import { ReactNode, useEffect, useRef, useState } from "react";

import * as S from "./DropDown.styled";

interface DropDownMenuItem<T> {
  label: string | ReactNode;
  value: T;
}

interface Props<T> {
  buttonLabel: string | ReactNode;
  items: DropDownMenuItem<T>[];
  direction?: "left" | "right";
  selectedValue?: T;
  onClick: (value: T) => void;
  disabled?: boolean;
}

export default function DropDown<T>({
  buttonLabel,
  items,
  direction = "right",
  selectedValue,
  onClick,
  disabled = false,
}: Props<T>) {
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

  const handleMenuItemClick = (value: T) => {
    onClick(value);
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    if (disabled) {
      return;
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <S.Container ref={containerRef}>
      <S.Button onClick={handleButtonClick} isActive={isOpen}>
        {buttonLabel}
      </S.Button>

      {isOpen && (
        <S.MenuContainer direction={direction}>
          <S.MenuList>
            {items.map((item) => (
              <li
                key={item.value as string}
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
