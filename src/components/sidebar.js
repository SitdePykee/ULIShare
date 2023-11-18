import {
  CloudUploadOutlined,
  FileDownloadDoneOutlined,
  FileDownloadOutlined,
  StarBorderOutlined,
  Upload,
} from "@mui/icons-material";
import { purple } from "@mui/material/colors";

export default function Sidebar() {
  return (
    <>
      <div className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-72 overflow-x-hidden transition-transform duration-300 ease-in-out">
        <Statistic />
        <Category />
      </div>
    </>
  );
}

export function Statistic() {
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
              text={"Đã đăng"}
              quantity={"5"}
            />
            <Criteria
              icon={
                <FileDownloadOutlined
                  fontSize="large"
                  sx={{ color: purple[800] }}
                />
              }
              text={"Đã tải"}
              quantity={"5"}
            />
            <Criteria
              icon={
                <StarBorderOutlined
                  fontSize="large"
                  sx={{ color: purple[800] }}
                />
              }
              text={"Rating"}
              quantity={"5"}
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
        <Link link={"#"} text={"Môn đại cương"} />
        <Link link={"#"} text={"Môn chuyên ngành"} />
        <Link link={"#"} text={"Ôn thi CDR NN1"} />
        <Link link={"#"} text={"Ôn thi CDR NN2"} />
      </div>
    </>
  );
}

export function Link({ link, text }) {
  return (
    <>
      <a
        href={link}
        class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-purple-500 hover:text-white rounded-md transition duration-150 ease-in-out"
      >
        <span>{text}</span>
      </a>
    </>
  );
}
