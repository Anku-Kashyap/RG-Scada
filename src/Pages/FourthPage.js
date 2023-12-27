import React from "react";
import LogBook from "../Component/LogBook/LogBook";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function FourthPage() {
  const { sharedValue } = useMyContext();
  return (sharedValue ? <LogBook /> : <Login />)
}

export default FourthPage;
