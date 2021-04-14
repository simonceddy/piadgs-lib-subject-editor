import { SET_SUBJECT_DATA } from '../actions/subjectActions';

const defaultState = {
  data: {},
};

export default function subjectsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SUBJECT_DATA:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}
