import axios from 'axios';

export const SET_SUBJECT_SELECTED_TITLES = 'SET_SUBJECT_SELECTED_TITLES';
export const SET_SUBJECT_NAME = 'SET_SUBJECT_NAME';
export const SET_SUBJECT_DATA = 'SET_SUBJECT_DATA';
export const SET_SUBJECT_MESSAGE = 'SET_SUBJECT_MESSAGE';
export const RESET_SUBJECT = 'RESET_SUBJECT';

export const resetSubject = () => ({
  type: RESET_SUBJECT
});

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

export const setSubjectMessage = (message) => ({
  type: SET_SUBJECT_MESSAGE,
  payload: { message }
});

export const updateSubject = (data) => (dispatch, getState) => {
  console.log(getState().subject.selectedTitles);
  return axios.post('/subjects/update', data)
    .then((res) => Promise.resolve(dispatch(setSubjectData(res.data.data)))
      .then(() => dispatch(setSubjectMessage('Changes saved successfully!')))
      .catch((err) => setSubjectMessage(`Error: ${err.message}`)))
    .catch((err) => {
      console.log(err);
      return dispatch(setSubjectData({}));
    });
};

export const setData = (data = {}) => (dispatch) => Promise.resolve(
  dispatch(setSubjectData(data))
)
  .then(() => Promise.resolve(dispatch(setSubjectName(data.name))))
  .then(() => dispatch(setSubjectSelectedTitles(
    Object.fromEntries(data.titles.map(({ id: titleId }) => [titleId, true]))
  )));

export const fetchSubject = (id) => (dispatch) => axios.get(`/subjects/${id}`,)
  .then((res) => dispatch(setData(res.data.data)))
  .catch((err) => {
    console.log(err);
    return dispatch(setSubjectData({}));
  });
