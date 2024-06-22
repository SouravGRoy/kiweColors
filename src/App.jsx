import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function AppContent() {
  const location = useLocation();
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
