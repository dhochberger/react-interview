import { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/ReduxHooks";
import { PageEnumValues } from "../types/PageEnum";
import "./styles/pagination.css";

const PageSelector: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((store) => store.filters);

  const handlePageSelection = (pageSize: number) =>
    dispatch({ type: "filters/changeFilter", payload: { pageSize } });

  return (
    <select
      value={filters.pageSize}
      title="page"
      onChange={(event) => handlePageSelection(parseInt(event.target.value))}
    >
      {PageEnumValues.map((item, key) => (
        <option value={item} key={key}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default PageSelector;
