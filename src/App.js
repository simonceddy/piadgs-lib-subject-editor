import { connect } from 'react-redux';
import SubjectList from './components/Subjects/SubjectList';
import ThemedDiv from './components/Subjects/ThemedDiv';
import SubjectSearch from './containers/Subjects/SubjectSearch';

function App({ results }) {
  return (
    <ThemedDiv className="w-full h-full">
      <div className="mx-auto sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 w-full h-full flex flex-col justify-start items-center dark:bg-black dark:text-green-200">
        <SubjectSearch />
        {results.length > 0 ? (
          <SubjectList subjects={results} />
        ) : null}
      </div>
    </ThemedDiv>
  );
}

const mapStateToProps = (state) => ({
  results: state.subjectSearch.results
});

export default connect(mapStateToProps)(App);
