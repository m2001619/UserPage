import React, { useState } from "react";
import Section from "../../../GlobalComponent/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useBearStore from "../../../../GlobalState/useBearStore";
import classNames from "classnames";

const LatestTasks = () => {
  // Get the data of the component from the global state
  const [dataArr, setDataArr] = useState(
    useBearStore((state) => state.infoArr).dashboard.latestTasks
  );

  // Click event for deletes icon
  const onClick = (index: number) => {
    setDataArr((prevState) =>
      prevState.filter((item, index2) => index2 !== index)
    );
  };

  const props = (
    <ul>
      {dataArr.map((item, index, array) => (
        <li
          key={index}
          className={classNames(
            "flex justify-between items-center py-mainPadding",
            {
              "pt-0": index === 0,
              "pb-0": index === array.length - 1,
              "border-b-[1px] border-lightGrey": index !== array.length - 1,
            }
          )}
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href={""}>
            <h3 className={classNames("font-bold mb-1")}>{item.title}</h3>
            <p className={classNames("text-grey font-medium")}>
              {item.description}
            </p>
          </a>
          <FontAwesomeIcon
            className={classNames("cursor-pointer hover:text-red-500")}
            icon={["far", "trash-can"]}
            onClick={() => onClick(index)}
          />
        </li>
      ))}
    </ul>
  );

  return <Section title={"LatestTasks"} props={props} />;
};

export default LatestTasks;
