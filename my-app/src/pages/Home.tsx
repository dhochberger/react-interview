import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { useAppSelector } from "../hooks/ReduxHooks";
import { Movie } from "../types/MovieType";
import "./styles/home.css";

const Home: FunctionComponent = () => {
  const filters = useAppSelector((store) => store.filters);
  const movies = useAppSelector((store) => store.movies);

  const [page, setPage] = useState(1);

  const filtersHasCategory = useCallback(
    (category: string) =>
      filters.category?.length ? filters.category?.includes(category) : true,
    [filters]
  );

  const filteredMovies = useMemo(
    () =>
      movies
        .filter((item: Movie) => filtersHasCategory(item.category))
        .slice((page - 1) * filters.pageSize, page * filters.pageSize),
    [page, filters, movies, filtersHasCategory]
  );

  const pageMax = useMemo(
    () =>
      Math.ceil(
        (filters.category?.length
          ? movies.filter((item: Movie) => filtersHasCategory(item.category))
              .length
          : movies.length) / filters.pageSize
      ),
    [filters, movies, filtersHasCategory]
  );

  useEffect(() => {
    if (page === 0 && movies.length) return setPage(1);
    if (page > pageMax) setPage(pageMax);
  }, [movies, page, pageMax]);

  return (
    <div className="home-main">
      <Pagination page={page} pageMax={pageMax} setPageNumber={setPage} />
      <div className="home-card-layout">
        {filteredMovies.length
          ? filteredMovies.map((item: Movie, key: number) => (
              <div key={key} className="home-movie-card">
                <MovieCard movie={item} />
              </div>
            ))
          : "Aucun résultat"}
      </div>
    </div>
  );
};

export default Home;
