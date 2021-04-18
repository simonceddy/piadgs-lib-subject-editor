import { SET_SEARCH_INPUT, SET_SEARCH_RESULTS } from '../actions';

const defaultState = {
  input: '',
  results: []
};

export default function subjectSearchReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SEARCH_INPUT:
      return { ...state, input: action.payload.input };
    case SET_SEARCH_RESULTS:
      return { ...state, results: action.payload.results };
    default:
      return state;
  }
}
