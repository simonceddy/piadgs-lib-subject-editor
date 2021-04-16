import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ThemedButton from '../components/ThemedButton';
import SubjectWindow from '../components/SubjectWindow';
import SubjectNameField from '../components/SubjectNameField';
import SubjectTitleList from '../components/SubjectTitleList';
import ThemedDiv from '../components/ThemedDiv';
import {
  fetchSubject,
  setSubjectMessage,
  setSubjectName,
  setSubjectSelectedTitles, updateSubject
} from '../store/actions/subjectActions';

// TODO - less props - split responsibilities
function Subject({
  id,
  onClose,
  getSubject,
  data,
  setName,
  subjectName,
  message,
  setMessage,
  submitChanges,
  selectedTitles,
  setSelectedTitles
}) {
  const [isEditing, setIsEditing] = useState(false);

  const handleChecked = (titleId) => setSelectedTitles({
    ...selectedTitles,
    [titleId]: !selectedTitles[titleId]
  });

  // Is this helping?
  const fetchData = useCallback(() => getSubject(id), [id]);
  useEffect(() => fetchData(), [id]);

  return (
    <SubjectWindow>
      <ThemedDiv
        className="flex flex-row justify-between items-center w-full mb-3 pb-2 border-b"
      >
        <ThemedButton
          className="hover:underline"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Stop Editing' : 'Edit'}
        </ThemedButton>

        <ThemedButton
          className="hover:underline"
          onClick={onClose}
        >
          Close
        </ThemedButton>
      </ThemedDiv>
      {!message ? null : (
        <div
          className="w-full flex flex-row all-center"
          role="presentation"
          onClick={() => setMessage(null)}
        >
          {message}
        </div>
      )}
      {isEditing ? (
        <SubjectNameField
          value={subjectName}
          setValue={setName}
        />
      ) : (
        <>
          <span className="p-3 text-2xl">
            {subjectName}
          </span>
        </>
      )}
      <div className="w-full flex flex-col py-4 px-2 overflow-scroll">
        {data.titles && data.titles.length < 1 ? null : (
          <SubjectTitleList
            titles={data.titles}
            selectedTitles={selectedTitles}
            handleChecked={handleChecked}
            isEditing={isEditing}
          />
        )}
      </div>
      {isEditing ? (
        <ThemedDiv className="flex flex-row justify-evenly items-center pb-4 pt-2 mt-3 px-2 border-t w-full">
          <ThemedButton
            onClick={() => submitChanges({ id, name: subjectName })}
          >
            Save Changes
          </ThemedButton>
          <ThemedButton
            onClick={() => console.log('save as a new subject and add to checked titles')}
          >
            Save As New
          </ThemedButton>
        </ThemedDiv>
      ) : null}
    </SubjectWindow>
  );
}

const mapStateToProps = (state) => ({
  subjectName: state.subject.name,
  data: state.subject.data,
  message: state.subject.message,
  selectedTitles: state.subject.selectedTitles
});

const mapDispatchToProps = (dispatch) => ({
  getSubject: (id) => dispatch(fetchSubject(id)),
  setName: (name) => dispatch(setSubjectName(name)),
  setMessage: (message) => dispatch(setSubjectMessage(message)),
  submitChanges: (data) => dispatch(updateSubject(data)),
  setSelectedTitles: (selectedTitles) => dispatch(setSubjectSelectedTitles(selectedTitles))
});

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
