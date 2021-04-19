import {
  SET_SEARCH_INPUT,
  SET_SEARCH_RESULTS,
  SET_SORT_RESULTS
} from '../actions';

const defaultState = {
  input: '',
  results: [],
  sortKey: 'name',
  sortDirection: 'ASC'
};

export default function subjectSearchReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SORT_RESULTS:
      return {
        ...state,
        sortDirection: action.payload.sortDirection,
        sortKey: action.payload.sortKey
      };
    case SET_SEARCH_INPUT:
      return { ...state, input: action.payload.input };
    case SET_SEARCH_RESULTS:
      return { ...state, results: action.payload.results };
    default:
      return state;
  }
}
