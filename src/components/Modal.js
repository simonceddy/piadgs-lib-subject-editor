// import { COLOUR_CLASS_NAMES } from '../shared/consts';

function Modal({ children }) {
  return (
    <div className="flex max-h-full flex-col z-10 justify-between">
      {children}
    </div>
  );
}

export default Modal;
