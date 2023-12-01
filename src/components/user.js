import { Star, UploadFile } from '@mui/icons-material';
import { Content, Header } from './main';
import { useEffect, useState } from 'react';
import RadioGroupRating from './rating';
import { useNavigate, useParams } from 'react-router-dom';
import { auth, firestore } from '../App';
import { doc, getDoc } from 'firebase/firestore';

export default function User() {
  const [value, setValue] = useState(0);
  const [userData, setUserData] = useState(null);

  var navigate = useNavigate();

  var { id } = useParams();
  id = id.split('=')[1];
  var isCurrentUserPage =
    auth.currentUser != null && id == auth.currentUser.uid;
  if (userData == null && id != null) {
    var colRef = doc(firestore, 'users', id);
    getDoc(colRef).then((data) => {
      setUserData(data.data());
    });
  }

  return (
    <>
      <div className="h-full">
        <div
          className="h-56 w-full flex items-center justify-between shadow-md bg-cover"
          style={{
            backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/004/257/968/non_2x/abstract-purple-fluid-wave-background-free-vector.jpg")`,
          }}
        >
          <div
            className="mx-16 rounded-full w-32 h-32 bg-white"
            style={{
              backgroundImage: `url("https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
          <div className="block space-y-3">
            <div className="font-semibold text-3xl text-white">
              {userData == null ? 'Loading' : userData.name}
            </div>
            <div className="flex items-center space-x-3">
              <Star fontSize="large" className="text-yellow-500" />
              <div className="text-xl text-white">
                {userData == null ? 1 : userData.star}
              </div>
            </div>
          </div>
          <div className="ml-auto mr-11">
            {isCurrentUserPage ? (
              <button
                onClick={() => navigate('/upload')}
                className="px-4 py-2 bg-black text-white rounded block sm:flex space-x-2"
              >
                <UploadFile />
                <div>Đăng tài liệu</div>
              </button>
            ) : (
              <>
                <p component="legend" className="text-white text-lg">
                  Đánh giá độ tích cực
                </p>
                <RadioGroupRating
                  uid={id}
                  data={userData}
                  rating={userData != null ? userData.star : 5}
                />
              </>
            )}
          </div>
        </div>

        <div className="block max-w-full overflow-hidden mx-9 my-9">
          <Header text={'Tài liệu của tôi'} />
          {userData != null && userData.documents.length > 0 ? (
            <Content ids={userData.documents} />
          ) : (
            <div className="mx-9 my-9">Chưa có</div>
          )}
          <Header text={'Tài liệu đã tải'} />
          {userData != null && userData.downloaded.length > 0 ? (
            <Content ids={userData.downloaded} />
          ) : (
            <div className="mx-9 my-9">Chưa có</div>
          )}
        </div>
      </div>
    </>
  );
}
