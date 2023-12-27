import React from "react";
import Default from "../Component/Default/Default";
import ZoneWiseNathuaWala from "../Component/ZoneWise/ZoneWiseNathuawala";
import { useMyContext } from "../Component/Context";
import Login from "../Component/Login/Login";

function NathuaWala() {
  const { sharedValue } = useMyContext();

  return sharedValue ? (
    <div>
      <Default />
      <ZoneWiseNathuaWala />
    </div>
  ) : (
    <Login />
  );
}

export default NathuaWala;
