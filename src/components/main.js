import {
  ChevronLeft,
  ChevronRight,
  Comment,
  Favorite,
  SentimentDissatisfied,
} from "@mui/icons-material";
import { colors } from "@mui/material";
import { blue, red, yellow } from "@mui/material/colors";
import React, { useRef } from "react";
export default function Main() {
  return (
    <>
      <div className="mx-9 my-9">
        <Header text={"Tài liệu của bạn"} />
        <Content />
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

export function Content() {
  const contentRef = useRef(null);

  const scrollToRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        left: contentRef.current.scrollLeft + 330,
        behavior: "smooth",
      });
    }
  };

  const scrollToLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        left: contentRef.current.scrollLeft - 330,
        behavior: "smooth",
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
          <ChevronLeft style={{ transform: "scale(1.5)" }}></ChevronLeft>
        </div>
        <div
          className=" flex overflow-x-scroll no-scrollbar"
          ref={contentRef}
          style={{ scrollBehavior: "smooth" }}
        >
          <Block title={"Pháp luật đại cương"} author={"Cứt"} />
          <Block title={"Pháp luật đại cương"} author={"Cứt"} />
          <Block title={"Pháp luật đại cương"} author={"Cứt"} />
          <Block title={"Pháp luật đại cương"} author={"Cứt"} />
          <Block title={"Pháp luật đại cương"} author={"Cứt"} />
          <Block title={"Pháp luật đại cương"} author={"Cứt"} />
          <Block title={"Pháp luật đại cương"} author={"Cứt"} />
          <Block title={"Pháp luật đại cương"} author={"Cứt"} />
          <Block title={"Pháp luật đại cương"} author={"Cứt"} />
          <Block title={"Pháp luật đại cương"} author={"Cứt"} />
        </div>
        <div
          onClick={scrollToRight}
          className="right cursor-pointer hover:bg-purple-300 p-3 rounded-full transition-all ease duration-500"
        >
          <ChevronRight style={{ transform: "scale(1.5)" }}></ChevronRight>
        </div>
      </div>
    </>
  );
}

export function Block({ title, author }) {
  return (
    <div>
      <div className="max-w-md w-72 bg-white shadow-md rounded-lg overflow-hidden my-5 mx-5">
        <div className="h-72 bg-slate-500" />
        <div className="p-4">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-gray-600">{author}</p>
          <div className="flex items-center justify-evenly mt-4 w-full">
            <button className="mr-3 flex items-center hover:scale-150 transform transition-transform duration-300">
              <Favorite sx={{ color: red[600] }} />
              <span className="ml-1">4</span>
            </button>
            <button className="mr-3 flex items-center hover:scale-150 transform transition-transform duration-300">
              <SentimentDissatisfied sx={{ color: yellow[700] }} />
              <span className="ml-1">99</span>
            </button>
            <button className="flex items-center hover:scale-150 transform transition-transform duration-300">
              <Comment sx={{ color: blue[700] }} />
              <span className="ml-1">5</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
