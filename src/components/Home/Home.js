import React from "react";
import TopNav from "../TopNav";
import Cards from "./Cards";
import Footer from "../Footer";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <div>
        <TopNav />
        <Cards />
      </div>
    </>
  );
}
