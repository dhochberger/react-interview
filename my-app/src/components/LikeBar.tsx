import { FunctionComponent } from "react";
import { useAppDispatch } from "../hooks/ReduxHooks";
import { Movie } from "../types/MovieType";
import ButtonIcon from "./buttons/ButtonIcon";
import { ThumbsDown, ThumbsUp } from "./icons/Thumb";
import "./styles/likebar.css";

type Props = {
  movie: Movie;
};

const LikeBar: FunctionComponent<Props> = ({ movie }) => {
  const dispatch = useAppDispatch();

  const handleOnClick = (type: "movies/likeClick" | "movies/dislikeClick") => {
    dispatch({
      type,
      payload: {
        id: movie.id,
        like: "movies/likeClick" ? !movie.liked : !movie.disliked,
      },
    });
  };

  return (
    <div>
      <div className="bar-box">
        <div className="bar-numbers">
          <span>{movie.likes}</span>
          <span>{movie.dislikes}</span>
        </div>
        <div className="bar-wrapper">
          <div
            className="bar-likes"
            style={{
              width: `calc(100% - ${(
                (movie.dislikes / (movie.likes + movie.dislikes)) *
                100
              ).toFixed(2)}%)`,
            }}
          ></div>
          <div
            className="bar-dislikes"
            style={{
              width: `calc(100% - ${(
                (movie.likes / (movie.likes + movie.dislikes)) *
                100
              ).toFixed(2)}%)`,
            }}
          ></div>
        </div>
      </div>

      <div className="bar-icons">
        <ButtonIcon
          title="like"
          icon={<ThumbsUp color={movie.liked ? "green" : "grey"} />}
          onClick={() => handleOnClick("movies/likeClick")}
        />
        <ButtonIcon
          title="dislike"
          icon={<ThumbsDown color={movie.disliked ? "red" : "grey"} />}
          onClick={() => handleOnClick("movies/dislikeClick")}
        />
      </div>
    </div>
  );
};

export default LikeBar;
