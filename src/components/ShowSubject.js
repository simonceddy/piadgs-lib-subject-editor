import { useState } from 'react';
import Subject from '../containers/Subject';
import Modal from './Modal';
// import ViewSubject from './ViewSubject';

function ShowSubject({ subject = {} }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible ? (
        <div
          className="absolute w-full h-full top-0 left-0 flex flex-col all-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
          role="presentation"
        >
          <div
            role="presentation"
            className="w-full h-full opacity-0 z-10 absolute"
            onClick={() => setVisible(false)}
          />
          <Modal>
            <Subject onClose={() => setVisible(false)} subject={subject} />
          </Modal>
        </div>
      ) : null}
      <div
        role="presentation"
        className="cursor-pointer hover:underline m-0.5 p-1"
        onClick={() => setVisible(true)}
      >
        {subject.name}
      </div>
    </>
  );
}

export default ShowSubject;
