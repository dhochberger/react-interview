import { Filters } from "../types/FiltersType";
import { PageEnum } from "../types/PageEnum";

const initialState: Filters = {
  pageSize: PageEnum.FOUR,
  category: undefined,
};

export default function filtersReducer(state = initialState, action: any) {
  switch (action.type) {
    case "filters/changeFilter": {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}
