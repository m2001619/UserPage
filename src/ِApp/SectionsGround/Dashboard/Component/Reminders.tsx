import React from "react";
import useBearStore from "../../../../GlobalState/useBearStore";
import Section from "../../../GlobalComponent/Section";
import classNames from "classnames";
import { setColor } from "../../../../Inteface/interface";

const Reminders = () => {
  // Get the data of the component from the global state
  const dataArr = useBearStore((state) => state.infoArr).dashboard.Reminders;

  // Props Component
  const props = (
    <ul className={classNames("flex flex-col gap-4")}>
      {dataArr.map((item, index) => (
        <li key={index} className={classNames("flex items-center gap-3")}>
          <span
            style={{ backgroundColor: filterColor(index) }}
            className={classNames("w-4 h-4 bg-localBlue rounded-full")}
          />
          <span
            style={{ backgroundColor: filterColor(index) }}
            className={classNames("w-[2px] h-9 bg-localBlue")}
          />
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href={"#"} className={classNames("text-[14px]")}>
            <h3 className={classNames("font-bold mb-1")}>{item.text}</h3>
            <p className={classNames("text-grey font-medium")}>{item.date}</p>
          </a>
        </li>
      ))}
    </ul>
  );

  return <Section title={"Reminders"} props={props} />;
};

export default Reminders;

const filterColor = (index: number): string => {
  switch (index % 4) {
    case 0:
      return setColor("blue");
    case 1:
      return setColor("green");
    case 2:
      return setColor("orange");
    case 3:
      return setColor("red");
    default:
      return "";
  }
};
