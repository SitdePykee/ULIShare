import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Document_Sidebar from './components/document_sidebar';
import Login from './components/login';
import Main from './components/main';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Sign_up from './components/sign_up';
import User from './components/user';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { Rating, Typography } from '@mui/material';
import { useState } from 'react';

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

export default function App() {
  return (
    <Routes>
      <Route path="/signin" element={Login()} />
      <Route path="/signup" element={Sign_up()} />
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <div className="block md:flex w-screen">
              <Routes>
                <Route path="document" element={<Document_Sidebar />} />
                <Route index element={<Sidebar />} />
              </Routes>

              <div className="max-w-full overflow-hidden">
                <Routes>
                  <Route index element={Main()} />
                  <Route path="user/:id" element={User()} />
                </Routes>
              </div>
            </div>
          </>
        }
      />
    </Routes>
  );
}
