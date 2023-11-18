import {
  Download,
  DownloadDone,
  FileDownloadDone,
  Scale,
  Search,
  Upload,
} from "@mui/icons-material";
import logo from "./assets/Untitled.png";
import { purple } from "@mui/material/colors";
import { useState } from "react";

export default function Navbar() {
  console.log(logo);
  const [dropDownShown, setDropDownShown] = useState(false);
  function dropdownHandler(element) {}

  return (
    <>
      <div class="h-full w-full">
        <nav role="navigation" class="bg-white shadow xl:block hidden">
          <div class="mx-auto container px-6 py-2 xl:py-0">
            <div class="flex items-center justify-between">
              <div class="inset-y-0 left-0 flex items-center xl:hidden">
                <div class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-100 focus:outline-none transition duration-500 ease-in-out">
                  <div class="visible xl:hidden">
                    <ul
                      class={`p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden`}
                    >
                      <li class="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div class="flex items-center">
                          <FileDownloadDone sx={{ color: purple[800] }} />
                          <span class="ml-2 font-bold">Tài liệu đã đăng</span>
                        </div>
                      </li>
                      <li
                        class="flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center"
                        onclick="dropdownHandler(this)"
                      >
                        <div class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-puzzle"
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
                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                          </svg>
                          <span class="ml-2 font-bold">Tài liệu đã tải</span>
                        </div>
                      </li>
                      <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <div class="flex items-center">
                          <div class="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-500 ease-in-out">
                            <img
                              class="rounded h-10 w-10 object-cover"
                              src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                              alt="logo"
                            />
                          </div>
                          <p class="text-sm ml-2 cursor-pointer">
                            Tên người dùng
                          </p>
                          <div class="sm:ml-2 text-white relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
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
                      </li>
                      <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
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
                          <span class="ml-2">Tài khoản</span>
                        </div>
                      </li>
                    </ul>
                    <svg
                      // onClick={MenuHandler(this, true)}
                      aria-haspopup="true"
                      aria-label="Main Menu"
                      xmlns="http://www.w3.org/2000/svg"
                      class="show-m-menu icon icon-tabler icon-tabler-menu"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <line x1="4" y1="8" x2="20" y2="8"></line>
                      <line x1="4" y1="16" x2="20" y2="16"></line>
                    </svg>
                  </div>
                  <div
                    class="hidden close-m-menu text-gray-700"
                    // onClick={MenuHandler(this, true)}
                  >
                    <svg
                      aria-label="Close"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>
              </div>
              <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-md flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <div class="flex items-center">
                  <img src={logo} className="w-1/5" />
                  <h2 class="hidden sm:block text-base text-purple-600 font-bold leading-normal px-3">
                    ULIShare
                  </h2>
                </div>
              </button>
              <div className="flex items-center rounded-3xl transition-all ease duration-500 hover:bg-purple-400 border-2 border-black ">
                <input
                  style={{ width: "600px" }}
                  className="px-4 py-2 rounded-3xl flex-grow focus:outline-none"
                  placeholder="Tìm kiếm tài liệu..."
                ></input>
                <Search
                  fontSize="medium"
                  style={{ margin: "0 15px 0 15px" }}
                  className="text-black hover:text-white cursor-pointer"
                />
              </div>
              <div class="flex">
                <div class="hidden xl:flex md:mr-6 xl:mr-16">
                  <a
                    href="javascript: void(0)"
                    class="font-medium focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-purple-100 hover:text-purple-800 focus:bg-gray-100 focus:outline-none transition duration-500 ease-in-out"
                  >
                    <span class="mr-2">
                      <FileDownloadDone sx={{ color: purple[800] }} />
                    </span>
                    Tài liệu đã đăng
                  </a>
                  <a
                    href="javascript: void(0)"
                    class="font-medium focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-purple-100 hover:text-purple-800 focus:bg-gray-100 focus:outline-none transition duration-500 ease-in-out"
                  >
                    <span class="mr-2">
                      <Download sx={{ color: purple[800] }} />
                    </span>
                    Tài liệu đã tải
                  </a>
                </div>
                <div class={`xl:flex items-center`}>
                  <div class="ml-6 relative">
                    <button
                      aria-label="dropdown"
                      class="focus:outline-none border-b-2 border-transparent focus:border-indigo-700 py-3  focus:text-indigo-700 text-gray-600 hover:text-indigo-700 flex items-center relative"
                      // onClick={dropdownHandler(this)}
                    >
                      <ul
                        class={`p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 ${
                          dropDownShown ? "" : "hidden"
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
                            <span class="ml-2 font-medium">
                              Cài đặt tài khoản
                            </span>
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
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div class="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white top-0 z-40">
            <div
              aria-label="logo"
              role="img"
              tabindex="0"
              class="focus:outline-none w-24"
            >
              <img src={logo} className="w-1/2" />
            </div>
            <div class="flex items-center">
              <button
                id="menu"
                aria-label="open menu"
                class="focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md text-gray-800"
                // onClick={sidebarHandler(this)}
              >
                <svg
                  class="icon icon-tabler icon-tabler-menu-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="absolute w-full h-full transform -translate-x-full z-40 xl:hidden"
            id="mobile-nav"
          >
            <div
              class="bg-gray-800 opacity-50 w-full h-full"
              // onClick={sidebarHandler(false)}
            ></div>
            <div class="w-64 z-40 overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-500 ease-in-out">
              <div class="px-6 h-full">
                <div class="flex flex-col justify-between h-full w-full">
                  <div>
                    <div class="mt-6 flex w-full items-center justify-between">
                      <div class="flex items-center justify-between w-full">
                        <div class="flex items-center">
                          <img src={logo} />
                          <p
                            tabindex="0"
                            class="focus:outline-none text-base md:text-2xl text-gray-800 ml-3"
                          >
                            ULIShare
                          </p>
                        </div>
                        <button
                          id="cross"
                          aria-label="close menu"
                          class="focus:outline-none focus:ring-2 rounded-md text-gray-800"
                          // onClick={sidebarHandler(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-x"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <ul class="f-m-m">
                      <li>
                        <a class="cursor-pointer">
                          <div class="text-gray-800 pt-10">
                            <div class="flex items-center">
                              <div class="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                                <FileDownloadDone sx={{ color: purple[800] }} />
                              </div>
                              <p
                                tabindex="0"
                                class="focus:outline-none focus:text-indigo-600 text-indigo-700 xl:text-base text-base ml-3"
                              >
                                Tài liệu đã đăng
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a class="cursor-pointer">
                          <div class="text-gray-800 pt-8">
                            <div class="flex items-center justify-between">
                              <div class="flex items-center">
                                <div class="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                                  <Download sx={{ color: purple[800] }} />
                                </div>
                                <p
                                  tabindex="0"
                                  class="focus:outline-none focus:text-indigo-600 text-gray-800 xl:text-base md:text-2xl text-base ml-3"
                                >
                                  Tài liệu đã tải
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="w-full pt-4">
                    <div class="flex justify-center mb-4 w-full">
                      <div class="relative w-full">
                        <div class="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-search"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            stroke-width="1"
                            stroke="#A0AEC0"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <circle cx="10" cy="10" r="7"></circle>
                            <line x1="21" y1="21" x2="15" y2="15"></line>
                          </svg>
                        </div>
                        <input
                          class="focus:ring-2 focus:ring-gray-600 bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 pl-10 py-2"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <div class="border-t border-gray-300">
                      <div class="w-full flex items-center justify-between pt-1">
                        <div class="flex items-center">
                          <img
                            alt="profile-pic"
                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                            tabindex="0"
                            class="focus:outline-none  w-8 h-8 rounded-md"
                          />
                          <p
                            tabindex="0"
                            class="focus:outline-none text-gray-800 text-base leading-4 ml-2"
                          >
                            Tên tài khoản
                          </p>
                        </div>
                        <ul class="flex">
                          <li class="cursor-pointer text-gray-800 pt-5 pb-3">
                            <div
                              tabindex="0"
                              class="focus:outline-none focus:text-indigo-600 w-6 h-6 md:w-8 md:h-8"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-messages"
                                viewBox="0 0 24 24"
                                stroke-width="1"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                              </svg>
                            </div>
                          </li>
                          <li class="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                            <div
                              tabindex="0"
                              class="focus:outline-none focus:text-indigo-600 w-6 h-6 md:w-8 md:h-8"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-bell"
                                viewBox="0 0 24 24"
                                stroke-width="1"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                .<path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                              </svg>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
