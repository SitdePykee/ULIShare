import { Typography } from '@mui/material';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../App';
import { useState } from 'react';
import { DocumentCard } from './home/welcome_panel';
import { useLocation } from 'react-router-dom';

export default function SearchResult() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  var searchQuery = params.get('search');

  const [_result, setResult] = useState(null);

  var q = query(collection(firestore, 'documents'));
  if (_result == null) {
    getDocs(q).then((docs) => {
      var result = null;
      if (!docs.empty) {
        result = [];
        docs.forEach((doc) => {
          if (doc.data().name.toLowerCase().includes(searchQuery.toLowerCase()))
            result.push(doc.id);
        });
        if (result.length == 0) {
          result = null;
        }
      }
      setResult(result);
    });
  }

  return (
    <>
      <Typography variant="h5">{`Kết quả tìm kiếm cho '${searchQuery}'`}</Typography>
      <div className="max-h-fit mb-10">
        {_result != null ? (
          _result.map((e) => <DocumentCard id={e} />)
        ) : (
          <p>Không tìm thấy kết quả nào</p>
        )}
      </div>
    </>
  );
}
