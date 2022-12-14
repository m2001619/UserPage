import React, { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchingWord, setSearchingWord] = useState("");

  return (
    <div
      className={classNames(
        "w-full h-20 shadow-lg flex justify-between px-4 items-center"
      )}
    >
      <div
        className={classNames(
          "w-max items-center flex relative border-[1px] border-gray-400 p-2 rounded-xl"
        )}
      >
        <FontAwesomeIcon
          className={classNames("text-[16px] text-gray-500 mr-2")}
          icon={["fas", "search"]}
        />
        <input
          style={{
            outline: `none`,
          }}
          className={classNames(
            "text-[14px] font-medium w-28 focus-visible:w-44 transition-all duration-300 placeholder-gray-600"
          )}
          placeholder={"Type A Keyword"}
          value={searchingWord}
          onChange={(el) => setSearchingWord(el.target.value)}
        />
      </div>
      <div className={classNames("flex items-center gap-3")}>
        <div className={classNames("relative cursor-pointer")}>
          <FontAwesomeIcon
            icon={["far", "bell"]}
            className={classNames("text-xl")}
          />
          <span
            className={classNames(
              "absolute w-2 h-2 bg-red-500 rounded-full top-0 right-0 translate-x-1 -translate-y-1"
            )}
          ></span>
        </div>
        <Link to={"/profile"}>
          <img
            className={classNames("w-8 h-8 cursor-pointer")}
            src={require("../../../img/avatar.png")}
            alt={"profile"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
