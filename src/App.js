import { useState } from 'react';
import SubjectList from './components/SubjectList';
import ThemedDiv from './components/ThemedDiv';
import SubjectSearch from './containers/SubjectSearch';

function App() {
  const [results, setResults] = useState([]);

  return (
    <ThemedDiv className="w-full h-full">
      <div className="mx-auto sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 w-full h-full flex flex-col justify-start items-center dark:bg-black dark:text-green-200">
        <SubjectSearch onResolved={(res) => setResults(res.data.results)} />
        {results.length > 0 ? (
          <SubjectList subjects={results} />
        ) : null}
      </div>
    </ThemedDiv>
  );
}

export default App;
