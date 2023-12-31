import {
  CloudUploadOutlined,
  FileDownloadDoneOutlined,
  FileDownloadOutlined,
  Search,
  StarBorderOutlined,
  Upload,
} from '@mui/icons-material';
import { purple } from '@mui/material/colors';
import { SearchBar } from './navbar';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore } from '../App';

export default function Sidebar() {
  return (
    <>
      <div className="bg-white my-2 h-fit pb-16 md:h-screen md:block shadow-xl px-3 shrink-0 w-full md:w-72 transition-transform duration-300 ease-in-out">
        {auth.currentUser != null ? <Statistic /> : <></>}

        <Category />
      </div>
    </>
  );
}

export function Statistic() {
  const [stats, setStats] = useState(null);
  if (auth.currentUser != null && stats == null) {
    var docRef = doc(firestore, 'users', auth.currentUser.uid);
    getDoc(docRef).then((data) => {
      var map = data.data();
      setStats({
        upload: map.documents.length,
        download: map.downloaded.length,
        star: map.star,
      });
    });
  }

  return (
    <>
      <div class="space-y-6 md:space-y-10 mt-10">
        <div class="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500 my-2 ">
          <div class="flex justify-evenly w-full text-center">
            <Criteria
              icon={
                <CloudUploadOutlined
                  fontSize="large"
                  sx={{ color: purple[800] }}
                />
              }
              text={'Đã đăng'}
              quantity={stats == null ? 0 : stats.upload}
            />
            <Criteria
              icon={
                <FileDownloadOutlined
                  fontSize="large"
                  sx={{ color: purple[800] }}
                />
              }
              text={'Đã tải'}
              quantity={stats == null ? 0 : stats.download}
            />
            <Criteria
              icon={
                <StarBorderOutlined
                  fontSize="large"
                  sx={{ color: purple[800] }}
                />
              }
              text={'Rating'}
              quantity={stats == null ? 0 : stats.star}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function Criteria({ icon, text, quantity }) {
  return (
    <>
      <div>
        {icon}
        <p className="font-medium">{text}</p>
        <p>{quantity}</p>
      </div>
    </>
  );
}

export function Category() {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <Link link={'/?category=daicuong'} text={'Môn đại cương'} />
        <Link link={'/?category=chuyennganh'} text={'Môn chuyên ngành'} />
        <Link link={'/?category=cdrnn1'} text={'Ôn thi CDR NN1'} />
        <Link link={'/?category=cdrnn2'} text={'Ôn thi CDR NN2'} />
      </div>
    </>
  );
}

export function Link({ link, text }) {
  return (
    <>
      <a
        href={link}
        class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-purple-500 focus:bg-purple-500 focus:text-white hover:text-white rounded-md transition duration-150 ease-in-out"
      >
        <span>{text}</span>
      </a>
    </>
  );
}
