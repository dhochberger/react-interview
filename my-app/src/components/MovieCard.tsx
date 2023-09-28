import { FunctionComponent } from "react";
import { useAppDispatch } from "../hooks/ReduxHooks";
import { Movie } from "../types/MovieType";
import LikeBar from "./LikeBar";
import ButtonIcon from "./buttons/ButtonIcon";
import { Delete } from "./icons/Delete";
import "./styles/moviecard.css";

type Props = {
  movie: Movie;
};

const MovieCard: FunctionComponent<Props> = ({ movie }) => {
  const dispatch = useAppDispatch();

  const handleDeleteMovie = () =>
    dispatch({ type: "movies/removeMovie", payload: movie.id });

  return (
    <div className="movie-card">
      <div className="movie-card-body">
        <div className="movie-card-delete">
          <ButtonIcon
            title="delete"
            icon={<Delete />}
            onClick={handleDeleteMovie}
          />
        </div>
        <div className="movie-card-infos">
          <b>{movie.title}</b>
          {movie.category}
        </div>
        <LikeBar movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
