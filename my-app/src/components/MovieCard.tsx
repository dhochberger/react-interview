import { FunctionComponent } from "react";
import { Movie } from "../types/MovieType";
import { ThumbsDown, ThumbsUp } from "./icons/Thumb";
import "./styles/moviecard.css";

type Props = {
  movie: Movie;
};

const MovieCard: FunctionComponent<Props> = ({ movie }) => (
  <div>
    <div className="movieCard">
      <div
        style={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {movie.title}
      </div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div>
        <ThumbsUp />
        {movie.likes}
      </div>
      <div>
        <ThumbsDown />
        {movie.dislikes}
      </div>
    </div>
  </div>
);

export default MovieCard;
