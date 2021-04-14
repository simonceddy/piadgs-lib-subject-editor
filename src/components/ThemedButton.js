import { COLOUR_CLASS_NAMES } from '../shared/consts';

function ThemedButton({ children, onClick, className = '' }) {
  return (
    <button
      className={`p-2 text-xl border-2 rounded-xl ${COLOUR_CLASS_NAMES} hover:underline ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ThemedButton;
