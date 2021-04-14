import { COLOUR_CLASS_NAMES } from '../shared/consts';

function SubjectNameField({ value, setValue = () => null }) {
  return (
    <label htmlFor="subject-name" className="flex flex-row justify-between items-center w-full m-2">
      <span className="mr-2">
        Edit Subject title:
      </span>
      <input
        name="subject-name"
        id="subject-name"
        className={`${COLOUR_CLASS_NAMES} p-2 border-2 rounded-xl text-xl flex-1`}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}

export default SubjectNameField;
