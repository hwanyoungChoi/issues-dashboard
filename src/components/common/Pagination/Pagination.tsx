import { Button } from "../Button";
import * as S from "./Pagination.styled";

const MAX_PAGE_ITEM_COUNT = 7;

function getPaginationItems(page: number, count: number) {
  if (count <= MAX_PAGE_ITEM_COUNT) {
    return Array.from({ length: count }, (_, i) => i + 1);
  }

  const items: (number | string)[] = [];
  const firstPage = 1;
  const lastPage = count;

  items.push(firstPage);

  if (page <= 4) {
    for (let i = 2; i <= 5; i++) {
      items.push(i);
    }
    items.push("...");
  } else if (page >= count - 3) {
    items.push("...");
    for (let i = count - 4; i < count; i++) {
      items.push(i);
    }
  } else {
    items.push("...");
    for (let i = page - 1; i <= page + 1; i++) {
      items.push(i);
    }
    items.push("...");
  }

  items.push(lastPage);

  return items;
}

interface Props {
  count: number;
  page?: number;
  onPrev: () => void;
  onNext: () => void;
  onPage: (page: number) => void;
}

export default function Pagination({
  count,
  page = 1,
  onPrev,
  onNext,
  onPage,
}: Props) {
  const pageItems = getPaginationItems(page, count);

  return (
    <S.Container>
      <li>
        <Button onClick={onPrev} disabled={page === 1}>
          ◀️
        </Button>
      </li>

      {pageItems.map((item, idx) =>
        typeof item === "string" ? (
          <li key={`${item}-${idx}`}>{item}</li>
        ) : (
          <li key={item}>
            <Button
              onClick={() => onPage(Number(item))}
              disabled={page === item}
              style={page === item ? { fontWeight: "bold" } : {}}
            >
              {item}
            </Button>
          </li>
        )
      )}

      <li>
        <Button onClick={onNext} disabled={page === count}>
          ▶️
        </Button>
      </li>
    </S.Container>
  );
}
