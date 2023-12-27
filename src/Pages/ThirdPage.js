import React from "react";
import Default from "../Component/Default/Default";
import LogWise from "../Component/logwise/LogWise";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function ThirdPage() {
  const { sharedValue } = useMyContext();
  return (
    sharedValue ? <LogWise /> : <Login />
    )
}

export default ThirdPage;
