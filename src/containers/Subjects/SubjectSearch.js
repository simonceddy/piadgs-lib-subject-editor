import { connect } from 'react-redux';
import SearchSubjectsForm from '../../components/Subjects/SearchSubjectsForm';
import { performSearch, setSearchInput } from '../../store/actions';

function SubjectSearch({ submitSearch, input, setInput }) {
  return (
    <SearchSubjectsForm
      input={input}
      setInput={setInput}
      onSubmit={submitSearch}
    />
  );
}

const mapStateToProps = (state) => ({
  input: state.subjectSearch.input
});

const mapDispatchToProps = (dispatch) => ({
  setInput: (input) => dispatch(setSearchInput(input)),
  submitSearch: (input) => dispatch(performSearch(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubjectSearch);
