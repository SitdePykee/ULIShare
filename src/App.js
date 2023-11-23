import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Document_Sidebar from './components/document_sidebar';
import Main from './components/main';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import User from './components/user';
import Login from './pages/login';
import Sign_up from './pages/sign_up';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import Finish_sign_up from './pages/finish_sign_up';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import UploadPage from './components/upload';
import DocumentViewer from './components/document_viewer';
import { Upload } from '@mui/icons-material';

const firebaseConfig = {
  apiKey: 'AIzaSyDK1D_WaS5rVF2jWCzm_sw6wfd7KrLpHDY',
  authDomain: 'ulishare-1f60f.firebaseapp.com',
  projectId: 'ulishare-1f60f',
  storageBucket: 'ulishare-1f60f.appspot.com',
  messagingSenderId: '419653575935',
  appId: '1:419653575935:web:72e507839e785ce75358ca',
  measurementId: 'G-C39127C713',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default function App() {
  return (
    <Routes>
      <Route path="/signin" element={Login()} />
      <Route path="/signup" element={Sign_up()} />
      <Route path="/finish_sign_up" element={Finish_sign_up()} />
      <Route
        path="/*"
        element={
          <div>
            <Navbar />
            <div className="block md:flex w-screen">
              <Routes>
                <Route path="document/:docid" element={<Document_Sidebar />} />
                <Route path="*" element={<Sidebar />} />
              </Routes>

              <div className="max-w-full overflow-hidden flex-1 p-5">
                <div className="max-w-full flex-1 overflow-hidden">
                  <Routes>
                    <Route index element={Main()} />
                    <Route path="user/:id" element={<User />} />
                    <Route path="upload" element={<UploadPage />} />
                    <Route
                      path="document/:docid"
                      element={<DocumentViewer />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </Routes>
  );
}
