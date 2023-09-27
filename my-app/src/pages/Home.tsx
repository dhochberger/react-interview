import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Paginatinon";
import { Movie } from "../types/MovieType";

const Home: FunctionComponent = () => {
  const movies = useSelector((store: Movie[]) => store);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Pagination page={1} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(120px, 1fr))`,
          gap: "8px",
        }}
      >
        {movies.length &&
          movies.map((item, key) => (
            <div key={key}>
              <MovieCard movie={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
