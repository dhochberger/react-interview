import { FunctionComponent } from "react";
import { AngleLeft, AngleRight, AnglesLeft, AnglesRight } from "./icons/Angle";
import "./styles/pagination.css";

type Props = {
  page: number;
};

const Pagination: FunctionComponent<Props> = ({ page = 1 }) => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <select name="page">
        {[4, 8, 12].map((item, key) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <AnglesLeft />
      <AngleLeft />
      {page}
      <AngleRight />
      <AnglesRight />
    </div>
  );
};

export default Pagination;
