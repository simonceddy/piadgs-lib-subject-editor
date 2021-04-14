import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

function TitleSummary({ id }) {
  const [title, setTitle] = useState({});

  const fetchData = useCallback(() => axios.get(`/titles/${id}`)
    .then((res) => {
      if (res.status === 200) setTitle(res.data.data);
    })
    .catch((err) => console.log(err)), [id]);

  useEffect(() => {
    if (!title.id) {
      fetchData();
    }
  });

  return (
    <div className="w-full flex flex-col justify-between items-center p-2">
      <div className="w-full">
        {title.accessionNumber}
      </div>
      <div className="w-full">
        {title.isbn}
      </div>
      <div className="w-full">
        {title.imprint}
      </div>
    </div>
  );
}

export default TitleSummary;
