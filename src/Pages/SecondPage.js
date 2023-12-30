import React from "react";
import Instant from "../Component/Instantaneous/Instant";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";
import Header from "../Component/Header/Header";

function SecondPage() {
  const { sharedValue } = useMyContext();
  return sharedValue ? (
    <>
      <Header />
      <Instant />
    </>
  ) : (
    <Login />
  );
}

export default SecondPage;
