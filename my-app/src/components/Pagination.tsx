import { Dispatch, FunctionComponent, SetStateAction } from "react";
import CategorySelector from "./CategorySelector";
import PageSelector from "./PageSelector";
import ButtonIcon from "./buttons/ButtonIcon";
import { AngleLeft, AngleRight, AnglesLeft, AnglesRight } from "./icons/Angle";
import "./styles/pagination.css";

type Props = {
  page: number;
  pageMax: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

const Pagination: FunctionComponent<Props> = ({
  page = 1,
  pageMax,
  setPageNumber,
}) => {
  return (
    <div className="pagination">
      <CategorySelector />
      <PageSelector />
      <ButtonIcon
        disabled={page === 1}
        title="firstPage"
        icon={<AnglesLeft />}
        onClick={() => setPageNumber(1)}
      />
      <ButtonIcon
        disabled={page === 1}
        title="nextPage"
        icon={<AngleLeft />}
        onClick={() => setPageNumber((old) => (old === 1 ? old : old - 1))}
      />
      {`${page}/${pageMax}`}
      <ButtonIcon
        disabled={page === pageMax}
        title="pageBefore"
        icon={<AngleRight />}
        onClick={() =>
          setPageNumber((old) => (old === pageMax ? old : old + 1))
        }
      />
      <ButtonIcon
        disabled={page === pageMax}
        title="lastPage"
        icon={<AnglesRight />}
        onClick={() => setPageNumber(pageMax)}
      />
    </div>
  );
};

export default Pagination;
