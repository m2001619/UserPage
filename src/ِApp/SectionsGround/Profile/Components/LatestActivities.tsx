import React from "react";
import useBearStore from "../../../../GlobalState/useBearStore";
import Section from "../../../GlobalComponent/Section";
import classNames from "classnames";

const LatestActivities = () => {
  // Get the data of the component from the global state
  const dataArr = useBearStore((state) => state.infoArr).profile
    .latestActivities;

  // Props Component
  const props = (
    <ul>
      {dataArr.map((item, index, array) => (
        <li
          key={index}
          className={classNames(
            "flex flex-col md:flex-row justify-between items-center gap-3 py-5 border-b-[1px]",
            {
              "border-b-0": index === array.length - 1,
            },
            { "pt-0": index === 0 }
          )}
        >
          <div
            className={classNames(
              "flex flex-col md:flex-row text-center md:text-left items-center gap-3"
            )}
          >
            <img
              src={filterImage(item.title)}
              alt={""}
              className={classNames("w-16")}
            />
            <div>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href={"#"} className={classNames("mb-2 font-medium")}>
                {item.title}
              </a>
              <p className={classNames("text-grey font-medium")}>
                {item.description}
              </p>
            </div>
          </div>
          <div>
            <p
              className={classNames(
                "mb-2 font-medium text-center md:text-right"
              )}
            >
              {item.time}
            </p>
            <p className={classNames("text-grey font-medium")}>{item.date}</p>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Section
      title={"Latest Activities"}
      description={"Latest Activities Done By The User"}
      props={props}
    />
  );
};

export default LatestActivities;

const filterImage = (title: string) => {
  switch (title) {
    case "Store":
      return require("../../../../img/activity-01.png");
    case "Academy":
      return require("../../../../img/activity-02.png");
    case "Badges":
      return require("../../../../img/activity-03.png");
    default:
      return "";
  }
};
