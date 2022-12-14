import React from "react";
import useBearStore from "../../../../GlobalState/useBearStore";
import Section from "../../../GlobalComponent/Section";
import classNames from "classnames";
import {setColor} from "../../../../Inteface/interface";

const LastProjectProgress = () => {
  // Get the data of the component from the global state
  const dataArr = useBearStore((state) => state.infoArr).dashboard
    .lastProjectProgress;

  // Props Component
  const props = (
    <ul className={classNames("flex flex-col")}>
      {dataArr.map((item, index, array) => (
        <li key={index} className={classNames("flex gap-4")}>
          <div className={classNames("flex flex-col items-center")}>
            <div
              className={classNames(
                "relative w-7 h-7 border-2 border-localBlue rounded-full flex justify-center items-center"
              )}
            >
              <span
                style={{
                  background: item.status === "Pending" ? "white" : setColor("blue"),
                  animation:
                    item.status === "inProgress"
                      ? "change-color 0.8s infinite alternate"
                      : "",
                }}
                className={classNames(
                  "w-6 h-6 rounded-full border-2 border-white"
                )}
              />
            </div>
            <span
              className={classNames("h-7 w-[2px] bg-localBlue top-6", {
                hidden: index === array.length - 1,
              })}
            />
          </div>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );

  return <Section title={"Last Project Progress"} props={props} />;
};

export default LastProjectProgress;
