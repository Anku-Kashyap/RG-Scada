import React from "react";
import Default from "../Component/Default/Default";
import ZoneWisePratitnagar from "../Component/ZoneWise/ZoneWisePratitnagar";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function Pratitnagar() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <div>
      <Default />
      <ZoneWisePratitnagar />
    </div>
  ) : (
    <Login />
  );
}

export default Pratitnagar;
