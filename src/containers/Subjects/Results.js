import { connect } from 'react-redux';
import ResultRow from '../../components/Subjects/ResultRow';
import { sortSearchResults } from '../../store/actions';

const columns = [
  {
    key: 'name',
    name: 'Subject Name'
  },
  {
    key: 'titles',
    name: 'Number of Titles'
  }
];

function Results({
  results = [],
  handleSort = () => null,
  sortKey,
  sortDirection
}) {
  console.log(sortKey, sortDirection);
  return (
    <div className="p-2 w-full h-full overflow-scroll flex-1">
      <table className="w-full h-full">
        <thead>
          <tr>
            {columns.map(({ key, name }) => (
              <th key={key} id={key} onClick={() => handleSort(key)}>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {results.map((subject = {}) => (
            <ResultRow key={`subject-row-${subject.id}`} subject={subject} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  results: state.subjectSearch.results,
  sortKey: state.subjectSearch.sortKey,
  sortDirection: state.subjectSearch.sortDirection,
});

const mapDispatchToProps = (dispatch) => ({
  handleSort: (key) => dispatch(sortSearchResults(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
