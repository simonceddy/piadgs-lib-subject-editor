import { COLOUR_CLASS_NAMES } from '../shared/consts';

function ThemedDiv({ children, className = '' }) {
  return (
    <div
      className={`${COLOUR_CLASS_NAMES} ${className}`}
    >
      {children}
    </div>
  );
}

export default ThemedDiv;
