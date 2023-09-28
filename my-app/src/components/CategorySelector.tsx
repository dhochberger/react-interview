import { FunctionComponent, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/ReduxHooks";
import { Movie } from "../types/MovieType";
import "./styles/pagination.css";

const CategorySelector: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((store) => store.filters);
  const movies = useAppSelector((store) => store.movies);

  const getCategories = (movies: Movie[]) =>
    movies
      .reduce(
        (prevValue: string[], currentValue) =>
          prevValue.includes(currentValue.category)
            ? prevValue
            : [...prevValue, currentValue.category],
        []
      )
      .sort();

  const categories = useMemo(() => getCategories(movies), [movies]);

  const handleCategorySelection = (category: string) =>
    dispatch({
      type: "filters/changeFilter",
      payload: {
        category: filters.category?.includes(category)
          ? filters.category.filter((item: string) => item !== category)
          : [...(filters.category ?? []), category],
      },
    });

  return (
    <select title="category" value={filters.category} multiple>
      {categories.map((item, key) => (
        <option
          value={item}
          key={key}
          onClick={() => handleCategorySelection(item)}
        >
          {item}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
