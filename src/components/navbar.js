import { Download, FileDownloadDone, Search } from '@mui/icons-material';
import logo from '../assets/Untitled.png';
import { purple } from '@mui/material/colors';
import { useState } from 'react';
import { auth } from '../App';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [dropDownShown, setDropDownShown] = useState(false);
  var navigate = useNavigate();
  var currentUser = auth.currentUser;
  return (
    <>
      <div class="inline-flex items-center justify-between w-full h-full p-2 rounded-md text-gray-700 focus:outline-none transition duration-500 ease-in-out shadow">
        <Logo />
        <div className="w-full sm:hidden flex">
          <SearchBar />
        </div>
        <div className="hidden lg:flex">
          <SearchBar />
        </div>
        <div className="flex">
          <NavItem
            icon={<FileDownloadDone sx={{ color: purple[800] }} />}
            text={'Tài liệu đã đăng'}
            link={'#'}
          />
          <NavItem
            icon={<Download sx={{ color: purple[800] }} />}
            text={'Tài liệu đã tải'}
            link={'#'}
          />
        </div>
        {currentUser != null ? (
          <UserDropdown
            dropDownShown={dropDownShown}
            setDropDownShown={setDropDownShown}
          />
        ) : (
          <button
            content="Đăng nhập"
            className="bg-purple-500 rounded-2xl py-3 px-6 text-white"
            onClick={() => navigate('/signin')}
          >
            Đăng nhập
          </button>
        )}
      </div>
    </>
  );
}

export function SearchBar() {
  return (
    <>
      <div className=" items-center rounded-3xl transition-all ease duration-500 hover:bg-purple-400 border-2 border-black whitespace-nowrap">
        <input
          style={{ width: '40vw' }}
          className="px-4 py-2 rounded-3xl flex-grow focus:outline-none text-black"
          placeholder="Tìm kiếm tài liệu..."
        ></input>
        <Search
          fontSize="medium"
          style={{ margin: '0 15px 0 15px' }}
          className="text-black hover:text-white cursor-pointer"
        />
      </div>
    </>
  );
}

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

export function UserDropdown({ dropDownShown, setDropDownShown }) {
  return (
    <>
      <div class={`xl:flex items-center`}>
        <div class="ml-6 relative">
          <button
            aria-label="dropdown"
            class="focus:outline-none border-b-2 border-transparent focus:border-indigo-700 py-3  focus:text-indigo-700 text-gray-600 hover:text-indigo-700 flex items-center relative"
            // onClick={dropdownHandler(this)}
          >
            <ul
              class={`p-2 w-40 z-50 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 ${
                dropDownShown ? '' : 'hidden'
              }`}
            >
              <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-purple-700 focus:text-indigo-700 focus:outline-none">
                <a
                  href=""
                  class="focus:underline focus:text-indigo-700 focus:outline-none flex items-center"
                >
                  <svg
                    class="icon icon-tabler icon-tabler-user"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <span class="ml-2 font-medium">Tài khoản</span>
                </a>
              </li>
              <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-purple-700 focus:text-indigo-700 focus:outline-none flex items-center">
                <a
                  href="javascript:void(0)"
                  class="focus:underline focus:text-indigo-700 focus:outline-none flex items-center"
                >
                  <svg
                    class="icon icon-tabler icon-tabler-help"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="17" x2="12" y2="17.01" />
                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                  </svg>
                  <span class="ml-2 font-medium">Hỗ trợ</span>
                </a>
              </li>
              <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-purple-700 flex items-center focus:text-indigo-700 focus:outline-none">
                <a
                  href="javascript:void(0)"
                  class="focus:underline focus:text-indigo-700 focus:outline-none flex items-center"
                >
                  <svg
                    class="icon icon-tabler icon-tabler-settings"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span class="ml-2 font-medium">Cài đặt tài khoản</span>
                </a>
              </li>
            </ul>
            <div
              class="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-500 ease-in-out"
              onClick={() => {
                setDropDownShown(!dropDownShown);
              }}
            >
              <img
                class="rounded-full h-10 w-10 object-cover"
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                alt="logo"
              />
              <div class="ml-2 self-center">
                <svg
                  class="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export function NavItem({ icon, text, link }) {
  return (
    <>
      <a
        href={link}
        class="hidden sm:flex whitespace-nowrap font-medium focus:text-purple-700 border-b-2 border-transparent focus:border-purple-700 px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-purple-100 hover:text-purple-800 focus:bg-purple-100 focus:outline-none transition duration-500 ease-in-out"
      >
        <span class="mr-2">{icon}</span>
        {text}
      </a>
    </>
  );
}
