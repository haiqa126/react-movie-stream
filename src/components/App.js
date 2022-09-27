import React, { useState, useEffect } from "react";
import Home from "./Home/Home";
import Series from "./Screens/Series";
import Movies from "./Screens/Movies";
import Login from "./Forms/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Series" element={<Series />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Movies" element={<Movies />} />
      </Routes>

      {/* <Home /> */}
    </>
  );
}
export default App;
