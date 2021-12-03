import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const FAIL_DATA = "FAIL_DATA";
export const LOAD_DATA_EGIN = "LOAD_DATA_EGIN";
export const SINGLE_FILM_DETAILS = "SINGLE_FILM_DETAILS";

export function fetchData(tetxt) {
  return (dispatch) => {
    dispatch({
      type: LOAD_DATA_EGIN,
    });

    axios
      .get(`http://www.omdbapi.com/?apikey=15e4a76c&s=${tetxt}`)

      .then((response) =>
        dispatch({
          type: FETCH_DATA,
          payload: response.data.Search,
        })
      )
      .catch((error) =>
        dispatch({
          type: FAIL_DATA,
        })
      );
  };
}

export function filmDetails(product) {
  return (dispatch) => {
    dispatch({
      type: SINGLE_FILM_DETAILS,
      payload: product,
    });
  };
}
