import axios from 'axios';

export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export const setSearchInput = (input) => ({
  type: SET_SEARCH_INPUT,
  payload: { input }
});

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: { results }
});

export const performSearch = (input) => (dispatch) => axios.get(
  `/subjects/search?name=${input}`
)
  .then((res) => dispatch(setSearchResults(res.data.results || [])))
  .catch((err) => console.log(err));
