import React from "react";
import useBearStore from "../../../GlobalState/useBearStore";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../GlobalComponent/Title";

const Courses = () => {
  // Get the data of the component from the global state
  const coursesArr = useBearStore((state) => state.infoArr).courses.coursesInfo;

  return (
    <>
      <Title title={"Courses"}/>
      <ul
        className={classNames(
          "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        )}
      >
        {coursesArr.map((item, index) => (
          <li
            key={index}
            className={classNames(
              "bg-white rounded-lg relative hover:-translate-y-3 transition-all duration-300"
            )}
          >
            <img
              src={require(`../../../img/course-0${(index % 5) + 1}.jpg`)}
              alt={""}
              className={classNames("rounded-t-lg w-full")}
            />
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              key={index}
              href={"#"}
              className={classNames("absolute top-4 left-4")}
            >
              <img
                src={require(`../../../img/team-0${(index % 5) + 1}.png`)}
                alt={""}
                className={classNames(
                  "w-16 h-16 rounded-full border-2 border-white"
                )}
              />
            </a>
            <div className={classNames("bg-white rounded-lg p-mainPadding")}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href={"#"} className={classNames("font-bold")}>
                {item.title}
              </a>
              <p
                className={classNames(
                  "text-[14px] text-grey font-medium mt-4 leading-6"
                )}
              >
                {item.description}
              </p>
            </div>
            <div
              className={classNames(
                "p-4 border-t-[1px] border-lightGrey relative flex justify-between items-center"
              )}
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href={"#"}
                className={classNames(
                  "absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 py-1 px-2 rounded-md bg-localBlue text-[13px] text-white"
                )}
              >
                Course Info
              </a>
              <div
                className={classNames(
                  "text-[14px] text-grey flex gap-1 items-center"
                )}
              >
                <FontAwesomeIcon icon={["far", "user"]} />
                <span>{item.subscribes}</span>
              </div>
              <div
                className={classNames(
                  "text-[14px] text-grey flex gap-1 items-center"
                )}
              >
                <FontAwesomeIcon icon={["fas", "dollar-sign"]} />
                <span>{item.price}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Courses;
