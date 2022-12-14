import React from "react";
import useBearStore from "../../../../GlobalState/useBearStore";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserInfo = () => {
  // Get the data of the component from the global state
  const userInfo = useBearStore((state) => state.infoArr).profile.userInfo;
  const infosArr = useBearStore((state) => state.infoArr).profile.infos;

  return (
    <div
      className={classNames(
        "col-span-3 bg-white rounded-lg p-mainPadding md:flex"
      )}
    >
      <div
        className={classNames(
          "md:w-60 md:px-mainPadding flex flex-col justify-center items-center gap-3 text-center relative"
        )}
      >
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={require("../../../../img/avatar.png")}
          alt={"photo"}
          className={classNames("w-28 h-28 rounded-full")}
        />
        <h2 className={classNames("font-bold text-lg")}>{userInfo.name}</h2>
        <p className={classNames("text-grey font-semibold")}>
          Level {userInfo.level.userLevel}
        </p>
        <div
          className={classNames("h-2 w-48 bg-lightGrey rounded-lg relative")}
        >
          <span
            style={{
              width: `${
                (userInfo.level.userLevel / userInfo.level.totalLevel) * 100
              }%`,
            }}
            className={classNames(
              "absolute bg-localBlue h-full left-0 rounded-l-lg",
              {
                "rounded-r-lg":
                  userInfo.level.userLevel === userInfo.level.totalLevel,
              }
            )}
          />
        </div>
        <div>
          {"12345".split("").map((item, index) => (
            <FontAwesomeIcon
              key={index}
              className={"text-localOrange mr-1"}
              icon={[userInfo.rating.stars >= index ? "fas" : "far", "star"]}
            />
          ))}
        </div>
        <p className={classNames("text-[14px] text-grey")}>
          {userInfo.rating.count} Rating
        </p>
        <span
          className={classNames(
            "hidden md:block h-3/4 w-[1px] bg-lightGrey absolute right-0 top-1/2 -translate-y-1/2"
          )}
        ></span>
      </div>
      <ul className={classNames("w-full")}>
        {infosArr.map((item, index, array) => (
          <li
            key={index}
            className={classNames(
              "p-mainPadding border-b-[1px] border-lightGrey transition-all duration-300 hover:bg-[#f9f9f9]",
              { "border-b-0": index === array.length - 1 }
            )}
          >
            <h3
              className={classNames(
                "text-grey font-medium mb-2 text-center md:text-left"
              )}
            >
              {item.title}
            </h3>
            <ul
              className={classNames(
                "w-full flex grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2"
              )}
            >
              {item.value.map((item2, index2) => (
                <li
                  key={index2}
                  className={classNames(
                    "flex gap-2 flex-wrap justify-center md:justify-start"
                  )}
                >
                  <p
                    className={classNames("text-[14px] font-medium text-grey")}
                  >
                    {item2.name}:
                  </p>
                  <p className={classNames("text-[14px] font-medium")}>
                    {item2.value}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;
