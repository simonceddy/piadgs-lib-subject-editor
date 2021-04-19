import { connect } from 'react-redux';
import ThemedDiv from './components/Subjects/ThemedDiv';
import Results from './containers/Subjects/Results';
import SubjectSearch from './containers/Subjects/SubjectSearch';
import { sortSearchResults } from './store/actions';

function App({ results, handleSort }) {
  return (
    <ThemedDiv className="w-full h-full">
      <div className="mx-auto sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 w-full h-full flex flex-col justify-start items-center dark:bg-black dark:text-green-200">
        <SubjectSearch />
        {results.length > 0 ? (
          <Results sortBy={handleSort} subjects={results} />
        ) : null}
      </div>
    </ThemedDiv>
  );
}

const mapStateToProps = (state) => ({
  results: state.subjectSearch.results
});

const mapDispatchToProps = (dispatch) => ({
  handleSort: (key) => dispatch(sortSearchResults(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
