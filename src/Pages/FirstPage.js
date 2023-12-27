import React from "react";
import ZoneWiseKahrakmaf from "../Component/ZoneWise/ZoneWiseKahrakmaf";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function FirstPage() {
  const { sharedValue } = useMyContext();
  
  return sharedValue ? <ZoneWiseKahrakmaf /> : <Login />;
}

export default FirstPage;
