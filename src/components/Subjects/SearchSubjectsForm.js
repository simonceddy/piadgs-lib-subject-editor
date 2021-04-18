import { COLOUR_CLASS_NAMES } from '../../shared/consts';

function SearchSubjectsForm({ input, setInput, onSubmit = () => null }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(input);
      }}
      className="flex flex-row items-center justify-around w-full"
    >
      <input
        type="text"
        className={`text-2xl p-2 border-2 rounded-xl ${COLOUR_CLASS_NAMES}`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit" className={`p-2 border-2 rounded-xl m-2 hover:bg-black hover:text-white active:underline ${COLOUR_CLASS_NAMES}`}>
        Search subjects
      </button>
    </form>
  );
}

export default SearchSubjectsForm;
