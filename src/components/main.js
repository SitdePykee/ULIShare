import {
  ChevronLeft,
  ChevronRight,
  Comment,
  Favorite,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfied,
} from '@mui/icons-material';
import { colors } from '@mui/material';
import { blue, green, orange, red, yellow } from '@mui/material/colors';
import { doc, getDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import { firestore } from '../App';
import { useNavigate } from 'react-router-dom';
import { Title } from './document_sidebar';
export default function Main() {
  return (
    <>
      <div className="mx-9 my-9 flex justify-center items-center">
        <Title
          title={'Chào mừng bạn đến với nền tảng chia sẻ tài liệu ULIShare'}
        />
        {/* <Header text={'Tài liệu của bạn'} />
        <Content ids={[]} /> */}
      </div>
    </>
  );
}

export function Header({ text }) {
  return (
    <>
      <div className="mx-5 my-5">
        <p className="relative flex font-semibold text-2xl">{text}</p>
        <span class="absolute my-2 bg-purple-700 h-2 w-32 rounded-2xl"></span>
      </div>
    </>
  );
}

export function Content({ ids }) {
  const [documents, setDocuments] = useState(null);

  if (documents == null) {
    var docs = [];
    ids.forEach((e) => {
      var docRef = doc(firestore, 'documents', e);
      getDoc(docRef)
        .then((data) => {
          docs.push(data.data());
        })
        .then(() => {
          setDocuments(docs);
        });
    });
  }

  const contentRef = useRef(null);

  const scrollToRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        left: contentRef.current.scrollLeft + 330,
        behavior: 'smooth',
      });
    }
  };

  const scrollToLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        left: contentRef.current.scrollLeft - 330,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div
          onClick={scrollToLeft}
          className="left cursor-pointer hover:bg-purple-300 p-3 rounded-full transition-all ease duration-500"
        >
          <ChevronLeft style={{ transform: 'scale(1.5)' }}></ChevronLeft>
        </div>
        <div
          className=" flex overflow-x-scroll no-scrollbar"
          ref={contentRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          {documents != null ? (
            documents.map((e, index) => (
              <Block
                title={e.name}
                author={e.user_id}
                comments={e.comments.length}
                heart={e.reaction.heart}
                helpful={e.reaction.helpful}
                id={ids[index]}
                type={e.type}
              />
            ))
          ) : (
            <></>
          )}
        </div>
        <div
          onClick={scrollToRight}
          className="right cursor-pointer hover:bg-purple-300 p-3 rounded-full transition-all ease duration-500"
        >
          <ChevronRight style={{ transform: 'scale(1.5)' }}></ChevronRight>
        </div>
      </div>
    </>
  );
}

function renderReaction({ helpful }) {
  switch (helpful) {
    case 1:
      return <SentimentVeryDissatisfied sx={{ color: red[700] }} />;
    case 2:
      return <SentimentDissatisfied sx={{ color: orange[700] }} />;
    case 3:
      return <SentimentNeutral sx={{ color: yellow[700] }} />;
    case 4:
      return <SentimentSatisfied sx={{ color: blue[700] }} />;
    default:
      return <SentimentSatisfiedAlt sx={{ color: green[700] }} />;
  }
}

function parseHelpful(helpful) {
  switch (helpful) {
    case 1:
      return 'Rất tệ';
    case 2:
      return 'Tệ';
    case 3:
      return 'Tốt';
    case 4:
      return 'Hữu ích';
    default:
      return 'Rất hữu ích';
  }
}

function parseColor(type) {
  switch (type.toLowerCase()) {
    case 'môn đại cương':
      return <div className="h-3 bg-red-300" />;
    case 'môn chuyên ngành':
      return <div className="h-3 bg-yellow-300" />;
    default:
      return <div className="h-3 bg-slate-500" />;
  }
}

export function Block({ title, author, comments, heart, helpful, id, type }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  getDoc(doc(firestore, 'users', author)).then((data) => {
    setUser(data.data());
  });

  return (
    <div>
      <div
        onClick={() => {
          navigate('/document/docid=' + id);
        }}
        className="max-w-md w-72 bg-white shadow-md rounded-lg overflow-hidden my-5 mx-5"
      >
        {parseColor(type)}
        <div className="p-4">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-gray-600">{user != null ? user.name : ''}</p>
          <div className="flex items-center justify-evenly mt-4 w-full">
            <button className="mr-3 flex items-center hover:scale-150 transform transition-transform duration-300">
              <Favorite sx={{ color: red[600] }} />
              <span className="ml-1">{heart}</span>
            </button>
            <button className="mr-3 flex items-center hover:scale-150 transform transition-transform duration-300">
              {renderReaction(helpful)}
              <span className="ml-1">{parseHelpful(helpful)}</span>
            </button>
            <button className="flex items-center hover:scale-150 transform transition-transform duration-300">
              <Comment sx={{ color: blue[700] }} />
              <span className="ml-1">{comments}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
