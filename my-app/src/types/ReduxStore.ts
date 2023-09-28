import { Filters } from "./FiltersType";
import { Movie } from "./MovieType";

export type ReduxStoreType = {
  movies: Movie[];
  filters: Filters;
};
