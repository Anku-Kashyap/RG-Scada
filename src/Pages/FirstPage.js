import React from "react";
import ZoneWiseKahrakmaf from "../Component/ZoneWise/ZoneWiseKahrakmaf";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";
import Header from "../Component/Header/Header";

function FirstPage() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <>
      <Header />
      <ZoneWiseKahrakmaf />
    </>
  ) : (
    <Login />
  );
}

export default FirstPage;
