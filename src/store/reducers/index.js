import { combineReducers } from 'redux';
import subjectsReducer from './subjectsReducer';

const rootReducer = combineReducers({
  subject: subjectsReducer
});

export default rootReducer;
