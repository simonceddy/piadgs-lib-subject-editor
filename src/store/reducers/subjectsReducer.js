import { SET_SUBJECT_DATA, SET_SUBJECT_SELECTED_TITLES } from '../actions/subjectActions';

const defaultState = {
  data: {},
  selectedTitles: {}
};

export default function subjectsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SUBJECT_DATA:
      return { ...state, data: action.payload.data };
    case SET_SUBJECT_SELECTED_TITLES:
      return { ...state, selectedTitles: action.payload.selectedTitles };
    default:
      return state;
  }
}
