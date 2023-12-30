import React from "react";
import Default from "../Component/Default/Default";
import ZoneWisePratitnagar from "../Component/ZoneWise/ZoneWisePratitnagar";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";
import Header from "../Component/Header/Header";

function Pratitnagar() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <div>
      <Header />
      <ZoneWisePratitnagar />
    </div>
  ) : (
    <Login />
  );
}

export default Pratitnagar;
