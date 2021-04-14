import { combineReducers } from 'redux';
import subjectsReducer from './subjectsReducer';

const rootReducer = combineReducers({
  subjects: subjectsReducer
});

export default rootReducer;
