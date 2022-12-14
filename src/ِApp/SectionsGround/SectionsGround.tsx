import React from "react";
import classNames from "classnames";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Settings from "./Settings/Settings";
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";
import Courses from "./Courses/Courses";
import Friends from "./Friends/Friends";
import Files from "./Files/Files";
import { Route, Routes } from "react-router-dom";

const SectionsGround = () => {
  return (
    <div className={classNames("w-full h-full")}>
      <Header />
      <div
        className={classNames(
          "w-full min-h-full bg-[#f1f5f9] py-6 px-2 md:px-6"
        )}
      >
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/settings"} element={<Settings />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/courses"} element={<Courses />} />
          <Route path={"/friends"} element={<Friends />} />
          <Route path={"/files"} element={<Files />} />
        </Routes>
      </div>
    </div>
  );
};

export default SectionsGround;
