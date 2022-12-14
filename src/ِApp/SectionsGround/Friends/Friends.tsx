import React, { useState } from "react";
import useBearStore from "../../../GlobalState/useBearStore";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../GlobalComponent/Title";

const Friends = () => {
  // Get the data of the component from the global state
  const [coursesArr, setCoursesArr] = useState(
    useBearStore((state) => state.infoArr).friends.friendsInfo
  );

  // Delete The Item From The friend's Array
  const deleteFriend = (index: number) =>
    setCoursesArr((prevState) =>
      prevState.filter((item, index2) => index !== index2)
    );

  return (
    <>
      <Title title={"Friends"}/>
      <ul
        className={classNames(
          "w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        )}
      >
        {coursesArr.map((item, index) => (
          <li
            key={index}
            className={classNames(
              "bg-white rounded-lg relative p-mainPadding pb-0"
            )}
          >
            <div className={classNames("flex gap-2")}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href={"#"}
                className={classNames(
                  "text-[14px] bg-[#eee] text-[#666] flex w-8 h-8 justify-center items-center rounded-full hover:bg-localBlue hover:text-white transition-all duration-300"
                )}
              >
                <FontAwesomeIcon icon={["fas", "phone"]} />
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href={"#"}
                className={classNames(
                  "text-[14px] bg-[#eee] text-[#666] flex w-8 h-8 justify-center items-center rounded-full hover:bg-localBlue hover:text-white transition-all duration-300"
                )}
              >
                <FontAwesomeIcon icon={["far", "envelope"]} />
              </a>
            </div>
            <div className={classNames("flex flex-col items-center gap-1")}>
              <img
                src={require(`../../../img/friend-0${(index % 5) + 1}.jpg`)}
                alt={""}
                className={classNames("w-24 h-24 rounded-full mb-2")}
              />
              <h3 className={classNames("font-bold")}>{item.name}</h3>
              <p className={classNames("text-[14px] text-grey font-medium")}>
                {item.job}
              </p>
            </div>
            <div
              className={classNames(
                "flex flex-col gap-2 border-y-[1px] border-lightGrey py-4 mt-4 text-[14px] font-medium"
              )}
            >
              <div>
                <FontAwesomeIcon icon={["far", "face-smile"]} />
                <span className={classNames("ml-2")}>
                  {item.friends} Friend
                </span>
              </div>
              <div>
                <FontAwesomeIcon icon={["fas", "code-commit"]} />
                <span className={classNames("ml-2")}>
                  {item.projects} Projects
                </span>
              </div>
              <div>
                <FontAwesomeIcon icon={["far", "newspaper"]} />
                <span className={classNames("ml-2")}>
                  {item.articles} Articles
                </span>
              </div>
            </div>
            <div
              className={classNames("h-14 flex items-center justify-between")}
            >
              <span className={classNames("text-grey text-[14px] font-medium")}>
                Joined {item.date}
              </span>
              <div className={classNames("flex gap-1")}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href={"#"}
                  className={classNames(
                    " bg-localBlue text-[14px] text-white py-0.5 px-3 rounded-md"
                  )}
                >
                  Profile
                </a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href={"#"}
                  className={classNames(
                    " bg-localRed text-[14px] text-white py-0.5 px-3 rounded-md"
                  )}
                  onClick={() => deleteFriend(index)}
                >
                  Remove
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Friends;
