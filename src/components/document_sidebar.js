import {
  AccountCircle,
  CloudDownload,
  Comment,
  Face,
  Favorite,
  SentimentDissatisfied,
  Star,
  VerifiedUser,
} from "@mui/icons-material";
import { blue, red, yellow } from "@mui/material/colors";

export default function Document_Sidebar({ title }) {
  return (
    <>
      <div className="bg-white my-2 h-full md:block shadow-xl shrink-0 w-full md:w-72 transition-transform duration-300 ease-in-out ">
        <div className="space-y-10 p-5 pt-9">
          <Title title={"Đề kiểm tra vật lí đại cương"} />
          <div className="block space-y-3">
            <div className="flex">
              <div className="font-semibold">Người đăng: </div>
              <a className="text-purple-600 ml-2">Táo ngố</a>
            </div>
            <div className="flex">
              <div className="font-semibold">Ngày đăng: </div>
              <div className="text-purple-600 ml-2">22/1/2023</div>
            </div>
          </div>
          <div className="flex items-center justify-evenly mt-10 w-full">
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
              <span className="ml-1">2</span>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="rounded-full p-2 bg-green-500 transition-all ease duration-300 text-white">
              <CloudDownload className="mr-1" />
              Tải xuống tài liệu
            </button>
          </div>
        </div>
        <div>
          <Comment_Session />
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

export function Comment_Session() {
  return (
    <>
      <div class="flex items-center justify-center mt-5 mb-4">
        <form class="w-full max-w-xl bg-white rounded-lg pt-2">
          <div class="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              class="bg-gray-100 w-full rounded border border-gray-400 leading-normal resize-none py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Type Your Comment"
              required
            ></textarea>
          </div>
          <div class="w-full md:w-full flex items-start justify-end">
            <div class="mr-1">
              <input
                type="submit"
                class="bg-white mb-5 text-gray-700 font-medium py-1 px-2 border border-gray-400 rounded-3xl tracking-wide mr-1 hover:bg-purple-200"
                value="Post Comment"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="flex-col justify-center items-center w-full">
        <UserComment
          userName={"Linh gà vl"}
          userStar={"1.0"}
          text={"Gà chưa"}
        />
        <UserComment
          userName={"Linh gà số 1"}
          userStar={"4.0"}
          text={"Chúng tôi tin rằng uy tín là phương châm hàng đầu"}
        />
        <UserComment
          userName={"Táo ngố"}
          userStar={"5.0"}
          text={"Tự hào là công ty trò chơi trực tuyến số 1 châu Á"}
          type={"self"}
        />
      </div>
    </>
  );
}
function UserComment({ userName, userStar, text, type }) {
  const commentType = type || "default";

  // Trả về hàm JSX
  return (
    <div className="my-3">
      <div
        className={`ml-${
          commentType === "self" ? "auto" : "5"
        } flex items-center ${
          commentType === "self" ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center ${
            commentType === "self" ? "mr-7" : ""
          }`}
        >
          <AccountCircle fontSize="large" />
        </div>
        <div className="block">
          <div
            className={`ml-2 ${commentType === "self" ? "mr-2" : ""} font-bold`}
          >
            {userName}
          </div>
          <div className="ml-2 flex">
            <Star className="text-yellow-500" />
            <div className="ml-1">{userStar}</div>
          </div>
        </div>
      </div>
      <span
        className={`ml-${commentType === "self" ? "auto" : "5"} ${
          commentType === "self"
            ? "text-right mr-7 p-2 bg-purple-300 rounded-2xl inline-block ml-5"
            : "bg-purple-300 rounded-2xl mr-7 p-2 inline-flex"
        }`}
        style={commentType === "self" ? { justifyContent: "flex-end" } : {}}
      >
        {text}
      </span>
    </div>
  );
}
