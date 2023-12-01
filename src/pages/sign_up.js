import { useRef, useState } from 'react';
import logo from '../assets/Untitled.png';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth, firestore } from '../App';
import { useNavigate } from 'react-router';
import { Alert } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
export function Logo() {
  return (
    <>
      <div class="flex items-center">
        <img src={logo} className="w-1/5" />
        <p
          tabindex="0"
          class="focus:outline-none text-base md:text-2xl font-bold ml-3 "
        >
          ULIShare
        </p>
      </div>
    </>
  );
}

export default function Sign_up() {
  const [alert, setAlert] = useState(null);
  var emailRef = useRef(null);
  var passwordRef = useRef(null);
  var repasswordRef = useRef(null);
  var navigate = useNavigate();

  async function submit() {
    var email = emailRef.current.value;
    var password = passwordRef.current.value;
    var repassword = repasswordRef.current.value;

    if (password != repassword) {
      setAlert({ content: 'Mật khẩu không khớp, vui lòng nhập lại' });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
      return;
    }

    try {
      var user = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(firestore, 'users', user.user.uid), {
        documents: [],
        downloaded: [],
        star: 5,
      });
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/finish_sign_up');
    } catch (_) {
      setAlert({
        content: 'Tài khoản đã tồn tại hoặc mật khẩu chưa đúng định dạng',
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  }

  return (
    <>
      <body class="bg-white">
        {alert != null ? (
          <div className="fixed right-0 m-8">
            <Alert severity="error">{alert.content}</Alert>
          </div>
        ) : (
          <></>
        )}
        <div class="flex min-h-screen">
          <div class="flex flex-row w-full">
            <div class="hidden lg:flex flex-col justify-between bg-purple-500 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
              <div class="flex items-center justify-start space-x-3">
                <Logo />
              </div>
              <div class="space-y-5">
                <h1 class="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
                  Đăng kí tài khoản ULIShare của bạn để bắt đầu sử dụng
                </h1>
                <p class="text-lg">Bạn đã có tài khoản?</p>
                <button
                  onClick={() => navigate('signin')}
                  class="inline-block flex-none px-4 py-3 borders-2 rounded-lg font-medium border-black bg-black text-white"
                >
                  Đăng nhập tại đây
                </button>
              </div>
              <p class="font-medium">© 2023 ULIShare</p>
            </div>

            <div class="flex flex-1 flex-col items-center justify-center px-10 relative">
              <div class="flex lg:hidden justify-between items-center w-full py-4">
                <div class="flex items-center justify-center w-full">
                  <a href="#" class="font-medium text-lg">
                    <Logo />
                  </a>
                  <button className="bg-purple-500 rounded-2xl py-3 px-6 text-white">
                    Đăng kí
                  </button>
                </div>
              </div>
              <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                <div class="flex flex-col space-y-2 text-center">
                  <h2 class="text-3xl md:text-4xl font-bold">
                    Đăng kí tài khoản
                  </h2>
                  <p class="text-md md:text-xl">Đăng kí bằng email</p>
                </div>
                <div class="flex flex-col max-w-md space-y-5">
                  <input
                    type="text"
                    placeholder="Email"
                    ref={emailRef}
                    class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                  <input
                    type="password"
                    placeholder="Password (ít nhất 6 kí tự)"
                    ref={passwordRef}
                    class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                  <input
                    type="password"
                    placeholder="Nhập lại Password"
                    ref={repasswordRef}
                    class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                  <button
                    onClick={() => submit()}
                    class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                  >
                    Đăng kí
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
