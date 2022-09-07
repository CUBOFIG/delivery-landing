import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";

const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route component={() => <h1>ERROR</h1>} />
    </Routes>
  </>
);

export default Router;
