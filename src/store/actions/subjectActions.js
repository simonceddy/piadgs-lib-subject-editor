import axios from 'axios';

export const SET_SUBJECT_SELECTED_TITLES = 'SET_SUBJECT_SELECTED_TITLES';
export const SET_SUBJECT_NAME = 'SET_SUBJECT_NAME';
export const SET_SUBJECT_DATA = 'SET_SUBJECT_DATA';
export const SET_SUBJECT_MESSAGE = 'SET_SUBJECT_MESSAGE';

export const setSubjectSelectedTitles = (selectedTitles) => ({
  type: SET_SUBJECT_SELECTED_TITLES,
  payload: { selectedTitles }
});

export const setSubjectName = (name) => ({
  type: SET_SUBJECT_NAME,
  payload: { name }
});

export const setSubjectData = (data) => ({
  type: SET_SUBJECT_DATA,
  payload: { data }
});

export const updateSubject = (data) => (dispatch) => axios.post('/subjects/update', data)
  .then((res) => dispatch(setSubjectData(res.data.data)))
  .catch((err) => {
    console.log(err);
    return dispatch(setSubjectData({}));
  });

export const fetchSubject = (id) => (dispatch) => axios.get(`/subjects/${id}`,)
  .then((res) => dispatch(setSubjectData(res.data.data)))
  .catch((err) => {
    console.log(err);
    return dispatch(setSubjectData({}));
  });
