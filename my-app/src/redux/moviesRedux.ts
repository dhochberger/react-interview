import { Movie } from "../types/MovieType";
import { movies$ } from "../types/movies";

const initialState: Movie[] = [];

export default function moviesReducer(state = initialState, action: any) {
  switch (action.type) {
    case "movies/moviesLoaded": {
      return action.payload;
    }
    default:
      return state;
  }
}

export async function fetchMovies(dispatch?: any, getState?: any) {
  const response = await movies$;
  dispatch({ type: "movies/moviesLoaded", payload: response });
}
