import React from "react";
import Instant from "../Component/Instantaneous/Instant";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function SecondPage() {
  const { sharedValue } = useMyContext();
  return sharedValue ? <Instant /> : <Login />;
}

export default SecondPage;
