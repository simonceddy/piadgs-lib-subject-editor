import axios from 'axios';
import { sortPropAZ, sortPropLength } from '../../util/sort';

export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_SORT_RESULTS = 'SET_SORT_RESULTS';

export const setSearchInput = (input) => ({
  type: SET_SEARCH_INPUT,
  payload: { input }
});

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: { results }
});

export const setSortResults = (sortKey, sortDirection) => ({
  type: SET_SORT_RESULTS,
  payload: { sortKey, sortDirection }
});

export const performSearch = (input) => (dispatch) => axios.get(
  `/subjects/search?name=${input}`
)
  .then((res) => dispatch(setSearchResults(res.data.results || [])))
  .catch((err) => console.log(err));

const flipDirection = (direction) => (direction === 'ASC' ? 'DESC' : 'ASC');

export const sortSearchResults = (key) => async (dispatch, getState) => {
  const { results, sortKey, sortDirection } = getState().subjectSearch;
  const isSameKey = key === sortKey;
  // console.log(sortDirection, isSameKey);

  const direction = isSameKey ? flipDirection(sortDirection) : sortDirection;

  return Promise.resolve(dispatch(setSortResults(
    key,
    direction
  )))
    .then(() => {
      const sorted = key === 'titles'
        ? sortPropLength(results, 'titles')
        : sortPropAZ(results, 'name');

      return dispatch(setSearchResults(
        direction === 'DESC'
          ? sorted.reverse()
          : sorted
      ));
    })
    .catch((err) => console.log(err));
};
