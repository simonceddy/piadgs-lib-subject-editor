function ResultRow({ subject = {} }) {
  return (
    <tr id={`subject-row-${subject.id}`}>
      <td>
        {subject.name}
      </td>
      <td>
        {subject.titles ? subject.titles.length : '0'}
      </td>
    </tr>
  );
}

export default ResultRow;
