import { useState } from 'react';
import axios from 'axios';
import ThemedButton from '../components/ThemedButton';
import SubjectWindow from '../components/SubjectWindow';
import SubjectNameField from '../components/SubjectNameField';
import SubjectTitleList from '../components/SubjectTitleList';
import ThemedDiv from '../components/ThemedDiv';

function Subject({ subject = {}, onClose }) {
  const { titles } = subject || [];

  const [isEditing, setIsEditing] = useState(false);

  const [editedSubjectName, setEditedSubjectName] = useState(subject.name);

  const [selectedTitles, setSelectedTitles] = useState(
    Object.fromEntries(titles.map(({ id }) => [id, true]))
  );

  const [message, setMessage] = useState(null);

  const handleChecked = (id) => setSelectedTitles({
    ...selectedTitles,
    [id]: !selectedTitles[id]
  });

  const setErrorMessage = () => setMessage('There was an error trying to save changes!');

  const submitChanges = () => {
    axios.post('/subjects/update', { id: subject.id, name: editedSubjectName })
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          setErrorMessage();
        } else {
          setMessage('Changes successful!');
        }
      })
      .catch(() => setErrorMessage());
  };

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
          value={editedSubjectName}
          setValue={setEditedSubjectName}
        />
      ) : (
        <>
          <span className="p-3 text-2xl">
            {subject.name}
          </span>
        </>
      )}
      <div className="w-full flex flex-col py-4 px-2 overflow-scroll">
        {titles.length < 1 ? null : (
          <SubjectTitleList
            titles={titles}
            selectedTitles={selectedTitles}
            handleChecked={handleChecked}
            isEditing={isEditing}
          />
        )}
      </div>
      {isEditing ? (
        <ThemedDiv className="flex flex-row justify-evenly items-center pb-4 pt-2 mt-3 px-2 border-t w-full">
          <ThemedButton
            onClick={() => submitChanges()}
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

export default Subject;
