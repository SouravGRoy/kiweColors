import React from "react";
import Navbar from "./Navbar";
import Landing from "./landing";
import Filter from "./filter";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Landing />
      <Filter />
      <Footer />
    </div>
  );
}
