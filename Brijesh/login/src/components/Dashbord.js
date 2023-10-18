import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";

import Nav from "./Nav";
import { Outlet } from "react-router";

export default function Dashbord() {
  return (
    <>
      <Nav />
      <Outlet/>
      {/* <Routes>
        <Route path="/dashbord/home" element={<Home />} />
        <Route path="/dashbord/about" element={<About />} />
        <Route path="/dashbord/contacts" element={<Contact />} />
      </Routes> */}
    </>
  );
}
