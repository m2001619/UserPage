import React from "react";
import Section from "../../../GlobalComponent/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import useBearStore from "../../../../GlobalState/useBearStore";
import { IconType } from "../../../../Inteface/interface";

const YearlyTargets = () => {
  // get the info from the global state
  const infoArr = useBearStore((state) => state.infoArr).dashboard.yearlyTarget;

  // the yearly percentage for every item
  let percentage: number[] = infoArr.map((item) =>
    Math.floor((item.thisYear / item.average) * 100)
  );

  const props = (
    <div className={classNames("flex flex-col gap-5")}>
      {infoArr.map((item, index) => (
        <div key={index} className={classNames("flex gap-2")}>
          <div
            style={{ background: colors(index).bg }}
            className={classNames("w-24 h-20 flex justify-center items-center")}
          >
            <FontAwesomeIcon
              style={{ color: colors(index).item }}
              className={classNames("text-xl")}
              icon={icons[index]}
            />
          </div>
          <div
            className={classNames(
              "h-20 w-full pl-3 flex flex-col justify-center gap-1"
            )}
          >
            <p className={classNames("text-[14px] text-grey")}>{item.title}</p>
            <span className={classNames("font-semibold")}>{item.thisYear}</span>
            <div
              style={{ backgroundColor: colors(index).bg }}
              className={classNames("w-full h-1 bg-blue-200 mt-1 relative")}
            >
              <span
                style={{
                  background: colors(index).item,
                  left: `${percentage[index]}%`,
                }}
                className={classNames(
                  "hidden sm:block absolute w-max py-1 px-1.5 -translate-y-[150%] -translate-x-[50%] text-[13px] text-white text-center rounded-md font-md"
                )}
              >
                {percentage[index]}%
              </span>
              <span
                style={{
                  borderRightColor: colors(index).item,
                  borderBottomColor: colors(index).item,
                  borderLeftColor: "transparent",
                  borderTopColor: "transparent",
                  left: `${percentage[index]}%`,
                }}
                className={classNames(
                  "hidden sm:block rotate-45 absolute border-8 -translate-y-[145%] -translate-x-[50%] left-[80%] z-10"
                )}
              />
              <span
                style={{
                  width: `${percentage[index]}%`,
                  background: colors(index).item,
                }}
                className={classNames("h-full absolute")}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Section
      title={"Yearly Targets"}
      description={"Targets Of The Year"}
      props={props}
    />
  );
};

export default YearlyTargets;

// Items' icons Array
let icons: IconType[] = [
  ["fas", "dollar-sign"],
  ["fas", "code"],
  ["fas", "user"],
];

// items' color Array
let colors = (index: number) => {
  switch (index % 3) {
    case 0:
      return {
        bg: "rgba(0, 117, 255, 0.2)",
        item: "#0075ff",
      };
    case 1:
      return {
        bg: "rgba(245, 158, 11, 0.2)",
        item: "#f59e0b",
      };
    default:
      return {
        bg: "rgba(34, 197, 94, 0.2)",
        item: "#22c55e",
      };
  }
};
