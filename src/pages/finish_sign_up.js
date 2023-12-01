import logo from '../assets/Untitled.png';
import { useNavigate } from 'react-router';
import React, { useState, useEffect, useRef } from 'react';
import { university } from '../university';
import { Autocomplete, TextField } from '@mui/material';
import { auth, firestore } from '../App';
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

export default function Finish_sign_up() {
  var navigate = useNavigate();

  var nameRef = useRef(null);
  var phoneRef = useRef(null);

  const [school, setSchool] = useState(null);
  const [birthdate, setBirthdate] = useState(null);

  const handleFinish = async () => {
    var name = nameRef.current.value;
    var phone = phoneRef.current.value;

    const ref = doc(firestore, 'users', auth.currentUser.uid);
    await setDoc(
      ref,
      { name: name, phone: phone, birthdate: birthdate, school: school },
      { merge: true }
    );

    alert('Đăng ký tài khoản thành công. Bây giờ bạn có thể đăng nhập.');
    navigate('/signin');
  };

  return (
    <>
      <body class="bg-white">
        <div class="flex min-h-screen">
          <div class="flex flex-row w-full">
            <div class="hidden lg:flex flex-col justify-between bg-purple-500 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
              <div class="flex items-center justify-start space-x-3">
                <Logo />
              </div>
              <div class="space-y-5">
                <h1 class="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
                  Chỉ còn vài bước nữa thôi
                </h1>
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
                    Hoàn tất đăng kí
                  </button>
                </div>
              </div>
              <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                <div class="flex flex-col space-y-2 text-center">
                  <h2 class="text-3xl md:text-4xl font-bold">
                    Hoàn tất đăng kí
                  </h2>
                  <p class="text-md md:text-xl">
                    Cho chúng tôi biết thêm về bạn nhé
                  </p>
                </div>
                <div class="flex flex-col max-w-md space-y-5">
                  <div className="block mb-2 text-lg font-bold text-gray-800">
                    Tên của bạn:
                  </div>
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="Nhập tên của bạn"
                    class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                  <div className="block mb-2 text-lg font-bold text-gray-800">
                    Số điện thoại của bạn:
                  </div>
                  <input
                    ref={phoneRef}
                    type="text"
                    placeholder="Số điện thoại"
                    class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                  <div className="block mb-2 text-lg font-bold text-gray-800">
                    Ngày sinh của bạn:
                  </div>
                  <input
                    type="date"
                    onChange={(e) => setBirthdate(e.target.value)}
                    class="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                  <Tag_selector
                    setSchool={(e, value) => {
                      setSchool(value);
                    }}
                  />
                  <button
                    onClick={() => handleFinish()}
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

export function Tag_selector({ setSchool }) {
  var tags = JSON.parse(university);

  return (
    <div>
      <label
        htmlFor="tagSelect"
        className="block mb-2 text-lg font-bold text-gray-800"
      >
        Trường ĐH của bạn:
      </label>
      <Autocomplete
        id="tagSelect"
        className="w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        options={JSON.parse(university)}
        onChange={setSchool}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
}
