import { Logout, Star, UploadFile } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";
import Sidebar from "./sidebar";
import { Content, Header } from "./main";

export default function User() {
  return (
    <>
      <div className="h-full">
        <div
          className="h-56 w-full flex items-center justify-between shadow-md bg-cover"
          style={{
            backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/004/257/968/non_2x/abstract-purple-fluid-wave-background-free-vector.jpg")`,
          }}
        >
          <div className="mx-16 rounded-full w-32 h-32 bg-white" />
          <div className="block space-y-3">
            <div className="font-semibold text-3xl text-white">
              Phạm Văn Ngủ
            </div>
            <div className="flex items-center space-x-3">
              <Star fontSize="large" className="text-yellow-500" />
              <div className="text-xl text-white">1.0</div>
            </div>
          </div>
          <div className="ml-auto mr-11">
            <button className="px-4 py-2 bg-black text-white rounded block sm:flex space-x-2">
              <UploadFile />
              <div>Đăng tài liệu</div>
            </button>
          </div>
        </div>

        <div className="block max-w-full overflow-hidden mx-9 my-9">
          <Header text={"Tài liệu của tôi"} />
          <Content />
        </div>
      </div>
    </>
  );
}
