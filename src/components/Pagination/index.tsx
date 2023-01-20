import { useSystemContext } from "../../contexts/SystemContext";

import * as S from "./pagination.style";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const MAX_ITEMS = 10;
const LIMIT = 10;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ total, offset }: { total: number; offset: number }) => {
  const { setOffset } = useSystemContext();

  const current = offset ? offset / LIMIT + 1 : 1;
  const pages = Math.ceil(total / LIMIT);
  const first = Math.max(current - MAX_LEFT, 1);

  return (
    <S.ButtonsBox>
      <button onClick={() => setOffset(first)}>
        <RxDoubleArrowLeft />
      </button>
      <button onClick={() => setOffset(current - 1)}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <S.ButtonList>
        {Array.from({ length: MAX_ITEMS })
          .map((_, index) => index + first)
          .map((page) => (
            <S.ButtonPage key={page} current={page === current ? true : false}>
              <button onClick={() => setOffset((page - 1) * LIMIT)}>
                {page}
              </button>
            </S.ButtonPage>
          ))}
      </S.ButtonList>
      <button onClick={() => setOffset(current + 1)}>
        <MdOutlineKeyboardArrowRight />
      </button>
      <button onClick={() => setOffset(pages)}>
        <RxDoubleArrowRight />
      </button>
    </S.ButtonsBox>
  );
};

export default Pagination;
