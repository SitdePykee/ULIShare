import { CloudUpload, Logout, Star, UploadFile } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";
import Sidebar from "./sidebar";
import { Content, Header } from "./main";
import { useState } from "react";
import { Button, Rating } from "@mui/material";
import RadioGroupRating from "./rating";
import { useParams } from "react-router-dom";
import { auth } from "../App";
import styled from "@emotion/styled";

export default function User() {
  const [value, setValue] = useState(0);

  let { id } = useParams();
  var isCurrentUserPage =
    auth.currentUser != null && id == auth.currentUser.uid;
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
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
            {!isCurrentUserPage ? (
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUpload />}
                sx={{ backgroundColor: "black", borderRadius: "50px" }}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            ) : (
              <>
                <p component="legend" className="text-white text-lg">
                  Đánh giá độ tích cực
                </p>
                <RadioGroupRating />
              </>
            )}
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
