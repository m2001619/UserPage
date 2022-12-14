import React from "react";
import classNames from "classnames";
import Navbar from "./Navbar/Navbar";
import SectionsGround from "./SectionsGround/SectionsGround";

function App() {
  return (
    <div className={classNames("flex w-full min-h-screen")}>
      <div className={classNames("w-20 md:w-[250px]")}>
        <Navbar />
      </div>
      <div className={classNames("w-full")}>
        <SectionsGround />
      </div>
    </div>
  );
}

export default App;
