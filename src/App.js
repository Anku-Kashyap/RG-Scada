import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import FirstPage from "./Pages/FirstPage";
import Pratitnagar from "./Pages/Pratitnagar";
import NathuaWala from "./Pages/NathuaWala";
import Login from "./Component/Login/Login";
import { MyContextProvider, useMyContext } from "./Component/Context";

function App() {
  const [log, setLog] = useState(false);

  return (
    <MyContextProvider>
      <Routes>
        <Route path="/" element={log ? <HomePage /> : <Login />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/pratitnagar" element={<Pratitnagar />} />
        <Route path="/nathuawala" element={<NathuaWala />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/four" element={<FourthPage />} />
      </Routes>
    </MyContextProvider>
    //
  );
}

export default App;
