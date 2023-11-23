import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../App';
import DocViewer from 'react-doc-viewer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DocumentViewer() {
  const [document, setDocument] = useState(null);

  // const queryParameters = new URLSearchParams(window.location.search);
  // var id = queryParameters.get('docid');
  let { docid } = useParams();
  var id = docid.split('=')[1];
  if (id == null) return;

  if (document == null) {
    var docRef = doc(firestore, 'documents', id);
    getDoc(docRef).then((data) => {
      setDocument(data.data().ref);
    });
  }

  return <DocViewer documents={[document]} />;
}
