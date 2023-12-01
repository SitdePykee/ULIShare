import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../App';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DocumentViewer() {
  var [document, setDocument] = useState(null);
  let { docid } = useParams();
  var id = docid.split('=')[1];

  useEffect(() => {
    if (id == null || document !== null) {
      return;
    }

    var docRef = doc(firestore, 'documents', id);
    getDoc(docRef).then((data) => {
      var d = data.data();
      setDocument(d);
    });
  }, [id, document]);

  if (id == null || document == null) {
    return null;
  }
  return <iframe src={document.ref} className="w-full h-screen" />;
}
