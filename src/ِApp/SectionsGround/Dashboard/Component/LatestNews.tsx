import React from "react";
import Section from "../../../GlobalComponent/Section";
import useBearStore from "../../../../GlobalState/useBearStore";
import classNames from "classnames";

const LatestNews = () => {
  // Get the data of the component from the global state
  const dataArr = useBearStore((state) => state.infoArr).dashboard.latestNews;

  const props = (
    <ul className={classNames("flex flex-col")}>
      {dataArr.map((item, index, array) => (
        <li
          key={index}
          className={classNames(
            "py-mainPadding flex flex-col md:flex-row md:justify-between items-center",
            {
              "pt-0": index === 0,
              "pb-0": index === array.length - 1,
              "border-b-[1px] border-lightGrey": index !== array.length - 1,
            }
          )}
        >
          <div
            className={classNames(
              "flex flex-col md:flex-row items-center gap-3 text-center md:text-left"
            )}
          >
            <img
              src={item.img}
              alt={"img"}
              className={classNames("w-28 h-14 rounded-md")}
            />
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href={""}>
              <p className={classNames("font-bold md:mb-2")}>{item.title}</p>
              <p className={classNames("text-[14px] text-grey font-medium")}>
                {item.description}
              </p>
            </a>
          </div>
          <span
            className={classNames(
              "text-[12px] font-medium bg-lightGrey py-1 px-2 rounded-md mt-3 md:mt-0"
            )}
          >
            {item.date}
          </span>
        </li>
      ))}
    </ul>
  );

  return <Section title={"Latest News"} props={props} />;
};

export default LatestNews;
