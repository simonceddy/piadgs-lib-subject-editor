import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';
import SearchSubjectsForm from '../components/SearchSubjectsForm';

function SubjectSearch({ onResolved }) {
  const [input, setInput] = useState('');

  const submitSearch = (name) => {
    axios.get(`/subjects/search?name=${name}`)
      .then((res) => {
        if (onResolved) onResolved(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <SearchSubjectsForm
      input={input}
      setInput={setInput}
      onSubmit={submitSearch}
    />
  );
}

export default connect()(SubjectSearch);
