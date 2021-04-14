import { useState } from 'react';
import SubjectList from './components/SubjectList';
import SubjectSearch from './containers/SubjectSearch';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center dark:bg-black dark:text-green-200">
      <SubjectSearch onResolved={(res) => setResults(res.data.results)} />
      {results.length > 0 ? (
        <SubjectList subjects={results} />
      ) : null}
    </div>
  );
}

export default App;
