import ShowSubject from './ShowSubject';

function SubjectList({ subjects = [] }) {
  return (
    <div className="flex flex-col justify-start items-start flex-1 w-full p-2 overflow-scroll h-full">
      {subjects.map((subject = {}) => (
        <ShowSubject subject={subject} key={subject.id} />
      ))}
    </div>
  );
}

export default SubjectList;
