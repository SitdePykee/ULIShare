import {
  AccountCircle,
  CloudDownload,
  Comment,
  Favorite,
  Star,
} from '@mui/icons-material';
import { blue, red } from '@mui/material/colors';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { auth, firestore } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import moment from 'moment';

export default function Document_Sidebar({ title }) {
  const [document, setDocument] = useState(null);
  const [uploader, setUploader] = useState(null);

  var navigate = useNavigate();
  var commentRef = useRef();

  let { docid } = useParams();
  var id = docid.split('=')[1];

  if (document == null) {
    var docRef = doc(firestore, 'documents', id);
    getDoc(docRef).then((data) => {
      setDocument(data.data());

      getDoc(doc(firestore, 'users', data.data().user_id)).then((D) => {
        var _ = D.data();
        _.id = data.data().user_id;
        setUploader(_);
      });
    });
  }

  return (
    <>
      <div className="bg-white my-2 h-full md:block shadow-xl shrink-0 w-full md:w-72 transition-transform duration-300 ease-in-out ">
        <div className="space-y-10 p-5 pt-9">
          <div className="w-auto flex flex-col justify-center self-center">
            <Title title={document != null ? document.name : ''} />

            <Rating
              name="half-rating"
              className="self-center w-fit"
              value={document == null ? 5 : document.rating}
              onChange={(event, newValue) => {
                if (auth.currentUser == null) {
                  alert('Bạn phải đăng nhập để thực hiện chức năng này');
                  return;
                }
                if (auth.currentUser.uid == uploader.id) {
                  alert('Bạn không thể tự đánh giá tài liệu của mình');
                  return;
                }
                document.rating =
                  document.rating == 0
                    ? newValue
                    : (document.rating + newValue) / 2;
                setDoc(
                  doc(firestore, 'documents', id),
                  { rating: document.rating },
                  { merge: true }
                );
                alert('Bạn đã đánh giá thành công');
                setDocument(document);
              }}
              precision={0.5}
            />
          </div>
          <p className=" text-center">
            {document != null ? document.type : ''}
          </p>
          <div className="block space-y-3">
            <div className="flex">
              <div className="font-semibold">Người đăng: </div>
              <a
                className="text-purple-600 ml-2 cursor-pointer"
                onClick={() => {
                  navigate('/user/id=' + uploader.id);
                }}
              >
                {uploader != null ? uploader.name : ''}
              </a>
            </div>
            <div className="flex">
              <div className="font-semibold">Ngày đăng: </div>
              <div className="text-purple-600 ml-2">
                {document != null ? document.upload_date : ''}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-evenly mt-10 w-full">
            <button className="mr-3 flex items-center hover:scale-150 transform transition-transform duration-300">
              <Favorite sx={{ color: red[600] }} />
              <span className="ml-1">
                {document != null && document.reaction != null
                  ? document.reaction.heart
                  : 0}
              </span>
            </button>
            <button className="flex items-center hover:scale-150 transform transition-transform duration-300">
              <Comment sx={{ color: blue[700] }} />
              <span className="ml-1">
                {document != null
                  ? document.comment
                    ? Object.keys(document.comment).length
                    : 0
                  : 0}
              </span>
            </button>
          </div>
          <div
            onClick={() => {
              window.location.replace(document.ref);
            }}
            className="flex justify-center items-center"
          >
            <button className="rounded-full p-2 bg-green-500 transition-all ease duration-300 text-white">
              <CloudDownload className="mr-1" />
              Tải xuống tài liệu
            </button>
          </div>
        </div>
        <div className="flex w-full">
          <div class="w-full flex items-center justify-center mt-5 mb-4">
            <div class="w-full max-w-xl bg-white rounded-lg pt-2">
              <div class="w-full md:w-full px-3 mb-2 mt-2">
                <input
                  ref={commentRef}
                  class="bg-gray-100 w-full rounded border border-gray-400 leading-normal resize-none py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                  name="body"
                  placeholder="Nhập bình luận"
                  required
                ></input>
              </div>
              <div class="w-full md:w-full flex items-center justify-end">
                <div class="mr-1">
                  <button
                    onClick={() => {
                      var cmt = commentRef.current.value;
                      if (cmt == null || cmt == undefined || cmt.length == 0) {
                        alert('Vui lòng nhập bình luận');
                        return;
                      }

                      if (!document.comment) {
                        document.comment = {
                          [auth.currentUser.uid +
                          '_br_' +
                          moment().locale('en').format('HHmmssddMMyyyy')]: cmt,
                        };
                      } else {
                        document.comment[
                          auth.currentUser.uid +
                            '_br_' +
                            moment().locale('en').format('HHmmssddMMyyyy')
                        ] = cmt;
                      }

                      setDoc(
                        doc(firestore, 'documents', id),
                        { comment: document.comment },
                        {
                          merge: true,
                        }
                      );
                      alert('Đã đăng tải bình luận');
                      window.location.reload();
                    }}
                    class="bg-white mb-5 text-gray-700 font-medium py-1 px-2 border border-gray-400 rounded-3xl tracking-wide mr-1 hover:bg-purple-200"
                  >
                    Đăng tải
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {document != null ? (
            document.comment ? (
              <Comment_Session comments={document.comment} />
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export function Title({ title }) {
  return (
    <>
      <p className="text-center font-semibold text-xl"> {title} </p>
    </>
  );
}

export function Comment_Session({ comments }) {
  return (
    <>
      <div className="flex-col justify-center items-center w-full">
        {Object.entries(comments)
          .reverse()
          .map(([key, value]) => {
            return (
              <UserComment
                id={key.split('_br_')[0]}
                time={key.split('_br_')[1]}
                text={value}
              />
            );
          })}
      </div>
    </>
  );
}
function UserComment({ id, time, text, type }) {
  const commentType = type || 'default';

  const [user, setUser] = useState(null);
  if (user == null) {
    getDoc(doc(firestore, 'users', id)).then((data) => {
      setUser(data.data());
    });
  }

  // Trả về hàm JSX
  return (
    <div className="my-3">
      <div
        className={`ml-${
          commentType === 'self' ? 'auto' : '5'
        } flex items-center ${
          commentType === 'self' ? 'flex-row-reverse' : ''
        }`}
      >
        <div
          className={`w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center ${
            commentType === 'self' ? 'mr-7' : ''
          }`}
        >
          <AccountCircle fontSize="large" />
        </div>
        <div className="block">
          <div
            className={`ml-2 ${commentType === 'self' ? 'mr-2' : ''} font-bold`}
          >
            {user != null ? user.name : ''}
          </div>
        </div>
      </div>
      <p className={`ml-${commentType === 'self' ? 'auto' : '5'}`}>
        {moment(time, 'HHmmssddMMyyyy')
          .locale('en')
          .format('HH:mm:ss dd/MM/yyyy')}
      </p>
      <span
        className={`ml-${commentType === 'self' ? 'auto' : '5'} ${
          commentType === 'self'
            ? 'text-right mr-7 p-2 bg-purple-300 rounded-2xl inline-block ml-5'
            : 'bg-purple-300 rounded-2xl mr-7 p-2 inline-flex'
        }`}
        style={commentType === 'self' ? { justifyContent: 'flex-end' } : {}}
      >
        {text}
      </span>
    </div>
  );
}
