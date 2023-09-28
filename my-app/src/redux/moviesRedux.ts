import { Movie } from "../types/MovieType";
import { movies$ } from "../types/movies";

const initialState: Movie[] = [];

export default function moviesReducer(state = initialState, action: any) {
  switch (action.type) {
    case "movies/moviesLoaded": {
      return action.payload;
    }
    case "movies/removeMovie": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "movies/likeClick": {
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              likes: action.payload.like ? item.likes + 1 : item.likes - 1,
              liked: action.payload.like,
            }
          : item
      );
    }
    case "movies/dislikeClick": {
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              dislikes: action.payload.like
                ? item.dislikes + 1
                : item.dislikes - 1,
              disliked: action.payload.like,
            }
          : item
      );
    }
    default:
      return state;
  }
}

export async function fetchMovies(dispatch?: any, getState?: any) {
  const response = await movies$;
  dispatch({ type: "movies/moviesLoaded", payload: response });
}
