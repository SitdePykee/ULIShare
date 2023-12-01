import { Typography } from '@mui/material';

import logo from '../../assets/logo.png';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { auth, firestore } from '../../App';
import { useState } from 'react';
import { Content } from '../main';
import { ChevronRight } from '@mui/icons-material';

export function Welcome() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  var filter = params.get('category');
  var filterType = '';

  const displayFilter = () => {
    if (!filter) return <RecommendSection />;
    if (filter == 'daicuong') {
      filterType = 'Môn đại cương';
    }
    if (filter == 'chuyennganh') {
      filterType = 'Môn chuyên ngành';
    }
    if (filter == 'cdrnn1') {
      filterType = 'CDR Ngoại ngữ 1';
    }
    if (filter == 'cdrnn2') {
      filterType = 'CDR Ngoại ngữ 2';
    }
    return <FilterSection filterType={filterType} />;
  };

  const [userData, setUserData] = useState(null);
  if (userData == null) {
    var colRef = doc(firestore, 'users', auth.currentUser.uid);
    getDoc(colRef).then((data) => {
      setUserData(data.data());
    });
  }

  return (
    <div className="w-full">
      <div className="rounded-lg p-5 border w-full shadow-lg">
        <Typography variant="h6" sx={{ fontWeight: 'normal' }}>
          Chào mừng
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          {auth.currentUser.email}
        </Typography>
      </div>
      <div className="mt-6">{displayFilter()}</div>
    </div>
  );
}

export default function WelcomeNotLogin() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  var filter = params.get('category');

  const displayFilter = () => {
    if (!filter) return <RecommendSection />;
    if (filter == 'daicuong')
      return <FilterSection filterType={'Môn đại cương'} />;
    if (filter == 'chuyennganh')
      return <FilterSection filterType={'Môn chuyên ngành'} />;
    if (filter == 'cdrnn1')
      return <FilterSection filterType={'CDR Ngoại ngữ 1'} />;
    if (filter == 'cdrnn2')
      return <FilterSection filterType={'CDR Ngoại ngữ 2'} />;
  };

  return (
    <div className="w-full">
      <div className="rounded-lg flex justify-center border w-full shadow-lg">
        <div className="mt-10 mb-10 flex justify-center items-center flex-col w-full">
          <img src={logo} style={{ width: '100px' }} />
          <div className="flex-col mt-5 justify-center text-center">
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Chào mừng bạn đến với trang chia sẻ tài liệu ULIShare
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'normal' }}>
              Hãy tiến hành đăng nhập để bắt đầu chia sẻ tài liệu của bạn
            </Typography>
          </div>
        </div>
      </div>
      <div className="mt-6">{displayFilter()}</div>
    </div>
  );
}

function RecommendSection() {
  const numberOfDocumentsToRetrieve = 5;

  const getRandomDocuments = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'documents'));
      const totalDocuments = querySnapshot.size;

      const randomIndexes = generateRandomIndexes(
        totalDocuments,
        numberOfDocumentsToRetrieve
      );

      const randomDocuments = randomIndexes.map(
        (index) => querySnapshot.docs[index].id
      );

      return randomDocuments;
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  };

  const generateRandomIndexes = (maxIndex, count) => {
    const indexes = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * maxIndex);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  };

  const [documents, setDocuments] = useState(null);

  if (documents == null)
    getRandomDocuments().then((data) => setDocuments(data));

  return (
    <>
      <Typography variant="h6">Gợi ý cho bạn</Typography>
      {documents ? <Content ids={documents} /> : <></>}
    </>
  );
}

function FilterSection({ filterType }) {
  const [documents, setDocuments] = useState(null);

  if (documents == null) {
    const colRef = collection(firestore, 'documents');
    const q = query(colRef, where('type', '==', filterType));

    getDocs(q).then((querySnapshot) => {
      var arr = null;
      if (!querySnapshot.empty) {
        arr = [];
        querySnapshot.forEach((doc) => {
          arr.push(doc.id);
        });
      }

      setDocuments(arr);
    });
  }

  return (
    <>
      <Typography variant="h6">{filterType}</Typography>
      {documents != null ? (
        documents.map((e) => <DocumentCard id={e} />)
      ) : (
        <>
          <div className="w-full flex justify-center">
            <Typography>{'Không có tài liệu nào của danh mục này'}</Typography>
          </div>
        </>
      )}
    </>
  );
}

export function DocumentCard({ id }) {
  const [document, setDocument] = useState(null);
  const [author, setAuthor] = useState(null);

  const navigate = useNavigate();

  if (document == null)
    getDoc(doc(firestore, 'documents', id)).then(async (data) => {
      var documentData = data.data();
      var userId = documentData.user_id;
      var userData = (await getDoc(doc(firestore, 'users', userId))).data();
      setDocument(documentData);
      userData.id = userId;
      setAuthor(userData);
    });

  return (
    <>
      <div
        className="w-full border rounded-lg shadow-lg mt-5 hover:bg-violet-200 cursor-pointer"
        onClick={() => {
          navigate('/document/docid=' + id);
        }}
      >
        <div className="w-auto m-6 flex justify-between items-center">
          <div className="flex">
            <div className="flex flex-col">
              <Typography variant="h6">
                {document ? document.name : ''}
              </Typography>
              <Typography>{author ? author.name : ''}</Typography>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-fit flex flex-col text-right">
              <Typography>{document ? document.upload_date : ''}</Typography>
              <Typography>{document ? document.rating : ''}</Typography>
            </div>
            <ChevronRight></ChevronRight>
          </div>
        </div>
      </div>
    </>
  );
}
