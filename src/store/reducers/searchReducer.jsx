import * as Actions from "../actions/searchAction";

const initialState = {
  loading: null,
  movies: [],
  singleFilmData: [],
};

function searchReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case Actions.LOAD_DATA_EGIN:
      return { ...state, loading: true };
    case Actions.FETCH_DATA:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };

    case Actions.FAIL_DATA:
      return { ...state };
    case Actions.SINGLE_FILM_DETAILS:
      return {
        ...state,
        singleFilmData: action.payload,
      };
    default:
      return state;
  }
}

export default searchReducer;
