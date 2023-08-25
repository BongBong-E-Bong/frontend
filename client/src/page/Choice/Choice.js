import React from "react";
import { Stack, Checkbox } from "@mui/material";
import register from "../../image/register.png";

function Choice() {
  return (
    <Stack
      width="68%"
      height="62%"
      backgroundColor="#FAF3F0"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top="25%"
      left="17%"
    >
      <Stack
        direction="row"
        spacing={-13}
        justifyContent="center"
        marginTop="6%"
      >
        <Stack alignItems="center" spacing={2}>
          <Stack fontSize="32px">일봉이</Stack>
          <img src={register} alt="일봉 사진" width="60%" height="100%" />
          <Checkbox />
        </Stack>
        <Stack alignItems="center" spacing={2}>
          <Stack fontSize="32px">이봉이</Stack>
          <img src={register} alt="일봉 사진" width="60%" height="100%" />
          <Checkbox />
        </Stack>
        <Stack alignItems="center" spacing={2}>
          <Stack fontSize="32px">삼봉이</Stack>
          <img src={register} alt="일봉 사진" width="60%" height="100%" />
          <Checkbox />
        </Stack>
        <Stack alignItems="center" spacing={2}>
          <Stack fontSize="32px">오봉이</Stack>
          <img src={register} alt="일봉 사진" width="60%" height="100%" />
          <Checkbox />
        </Stack>
        <Stack alignItems="center" spacing={2}>
          <Stack fontSize="32px">육봉이</Stack>
          <img src={register} alt="일봉 사진" width="60%" height="100%" />
          <Checkbox />
        </Stack>
        <Stack alignItems="center" spacing={2}>
          <Stack fontSize="32px">칠봉이</Stack>
          <img src={register} alt="일봉 사진" width="60%" height="100%" />
          <Checkbox />
        </Stack>
        <Stack alignItems="center" spacing={2}>
          <Stack fontSize="32px">팔봉이</Stack>
          <img src={register} alt="일봉 사진" width="60%" height="100%" />
          <Checkbox />
        </Stack>
      </Stack>
      <Stack
        height="100%"
        width="100%"
        alignItems="center"
        spacing={2}
        marginTop="3%"
      >
        <Stack
          bgcolor="#FF8181"
          style={{
            cursor: "pointer",
            color: "white",
            borderRadius: "20px",
            width: "15%",
            height: "30%",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 3px 2px rgba(0, 0, 0, 0.3)",
            textShadow:
              "1px 1px 1px #000, -1px -1px 1px #000, 1px -1px 1px #000, -1px 1px 1px #000",
          }}
          onClick={() => {
            //내용 추가
          }}
        >
          <Stack fontSize="32px">투표하기</Stack>
        </Stack>

        <Stack
          bgcolor="#FFF"
          style={{
            cursor: "pointer",
            color: "white",
            borderRadius: "20px",
            width: "15%",
            height: "30%",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 3px 2px rgba(0, 0, 0, 0.3)",
            textShadow:
              "1px 1px 1px #000, -1px -1px 1px #000, 1px -1px 1px #000, -1px 1px 1px #000",
            border: "2px solid #FF8181",
          }}
          onClick={() => {
            //내용 추가
          }}
        >
          <Stack fontSize="32px">결과보기</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Choice;
