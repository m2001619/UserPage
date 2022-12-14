import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useBearStore from "../../GlobalState/useBearStore";
import { IconType } from "../../Inteface/interface";
import { Link, useHref } from "react-router-dom";

const Navbar = () => {
  // Get the Titles for the Sections from Global State
  const titlesArr = Object.keys(useBearStore((state) => state.infoArr));

  // Get the Selected Component from the Location's href Using "useHref" from React Router Toolkit
  const currentHref = useHref({}).split("/")[2]; // Use Href Return "/UserPage/currentLink" => currentLink

  return (
    <div
      className={classNames(
        "w-full px-2 mt-2 md:mt-5 flex flex-col items-center md:gap-4"
      )}
    >
      <div
        className={classNames(
          "w-max flex flex-col justify-center items-center gap-4"
        )}
      >
        <h1 className={classNames("text-sm md:text-xl font-bold")}>UserPage</h1>
        <div
          className={classNames(
            "relative w-[120%] h-[2px] bg-black hidden md:block"
          )}
        >
          <span
            className={classNames(
              "absolute w-4 h-4 bg-black border-2 border-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
          ></span>
        </div>
      </div>
      <div
        className={classNames("w-full flex flex-col items-center gap-1 mt-3")}
      >
        {titlesArr.map((item, index) => (
          <Link
            to={`/UserPage/${item}`}
            key={index}
            className={classNames(
              "px-3 py-2 w-max md:w-[90%] rounded-md flex items-center text-[14px] cursor-pointer hover:bg-[#f6f6f6] transition-all duration-300",
              { "bg-[#f6f6f6]": item === currentHref }
            )}
          >
            <FontAwesomeIcon
              className={classNames("md:w-5")}
              icon={setIcon(item)}
            />
            <h3 className={classNames("hidden md:inline font-medium ml-2")}>
              {item.slice(0, 1).toUpperCase() + item.slice(1)}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

// Set icon for each title
const setIcon = (title: string): IconType => {
  switch (title) {
    case "dashboard":
      return ["far", "chart-bar"];
    case "settings":
      return ["fas", "gear"];
    case "profile":
      return ["far", "user"];
    case "projects":
      return ["fas", "diagram-project"];
    case "courses":
      return ["fas", "graduation-cap"];
    case "friends":
      return ["far", "circle-user"];
    case "files":
      return ["far", "file"];
    case "plans":
      return ["far", "credit-card"];
    default:
      return ["far", "credit-card"];
  }
};
