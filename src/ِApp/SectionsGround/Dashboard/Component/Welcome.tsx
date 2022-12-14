import React from "react";
import useBearStore from "../../../../GlobalState/useBearStore";
import classNames from "classnames";
import Button from "../../../GlobalComponent/Button";
import { Link } from "react-router-dom";

const Welcome = () => {
  // Get the data of the component from the global state
  const userInfo = useBearStore((state) => state.infoArr).dashboard.userInfo;

  return (
    <div className={classNames("pb-mainPadding bg-white rounded-lg")}>
      <div
        className={classNames(
          "h-36 relative pt-mainPadding pb-2 px-mainPadding bg-lightGrey rounded-t-lg flex justify-between"
        )}
      >
        <div>
          <h2 className={classNames("font-bold text-2xl")}>Welcome</h2>
          <p className={classNames("text-grey mt-1")}>{userInfo.name}</p>
        </div>
        <div>
          <img
            src={require("../../../../img/welcome.png")}
            alt={"welcome"}
            className={classNames("w-52 hidden md:block")}
          />
        </div>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={require("../../../../img/avatar.png")}
          alt={"photo"}
          className={classNames(
            "w-16 h-16 border-4 border-white rounded-full absolute bottom-0 translate-y-1/2 left-1/2 md:left-5 -translate-x-1/2 md:translate-x-0"
          )}
        />
      </div>
      <div>
        <div
          className={classNames(
            "mt-12 border-y-[1px] border-lightGrey p-mainPadding flex flex-col md:flex-row gap-4 md:gap-0 font-medium"
          )}
        >
          <div className={classNames("text-center md:w-1/3")}>
            <p>{userInfo.name}</p>
            <p className={classNames("text-[14px] text-grey mt-2")}>
              {userInfo.job}
            </p>
          </div>
          <div className={classNames("text-center md:w-1/3")}>
            <p>{userInfo.projects}</p>
            <p className={classNames("text-[14px] text-grey mt-2")}>Projects</p>
          </div>
          <div className={classNames("text-center md:w-1/3")}>
            <p>${userInfo.salary}</p>
            <p className={classNames("text-[14px] text-grey mt-2")}>Salary</p>
          </div>
        </div>
        <div className={classNames("px-mainPadding pt-5 flex justify-end")}>
          <Link to={"/profile"}>
            <Button bgColor={"blue"} textColor={"white"} text={"Profile"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
