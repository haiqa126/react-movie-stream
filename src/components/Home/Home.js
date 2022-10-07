import React from "react";
import TopNav from "../TopNav";
import Cards from "./Cards";
import Footer from "../Footer";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <div>
        {/*please read about feature-based react structure: https://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/*/}
        <TopNav />
        <Cards />
      </div>
    </>
  );
}
