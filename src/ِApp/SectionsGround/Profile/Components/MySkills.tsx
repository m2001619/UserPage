import React from "react";
import useBearStore from "../../../../GlobalState/useBearStore";
import Section from "../../../GlobalComponent/Section";
import classNames from "classnames";

const MySkills = () => {
  // Get the data of the component from the global state
  const dataArr = useBearStore((state) => state.infoArr).profile.mySkills;

  // props Component
  const props = (
    <ul>
      {dataArr.map((item, index, array) => (
        <li key={index}>
          <ul
            className={classNames(
              "flex flex-wrap gap-2 py-4 border-b-[1px] justify-center md:justify-start",
              {
                "border-b-0": index === array.length - 1,
              }
            )}
          >
            {item.map((item2, index2) => (
              <li
                key={index2}
                className={classNames(
                  "px-2 py-1 bg-[#eee] rounded-md text-[14px] font-medium"
                )}
              >
                {item2}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );

  return (
    <Section
      title={"My Skills"}
      description={"Complete Skills List"}
      props={props}
    />
  );
};

export default MySkills;
