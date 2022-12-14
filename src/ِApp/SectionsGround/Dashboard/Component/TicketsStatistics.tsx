import React from "react";
import Section from "../../../GlobalComponent/Section";
import useBearStore from "../../../../GlobalState/useBearStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import {IconType, setColor} from "../../../../Inteface/interface";

const TicketsStatistics = () => {
  // Get the data of the component from the global state
  const dataArr = useBearStore((state) => state.infoArr).dashboard
    .ticketsStatistics;

  // items' icons Array
  const icons:{value: IconType, color: string}[] = [
    {
      value: ["far","rectangle-list"],
      color: setColor("orange"),
    },
    {
      value: ["fas","spinner"],
      color: setColor("blue"),
    },
    {
      value: ["far","check-circle"],
      color: setColor("green"),
    },
    {
      value: ["far","rectangle-xmark"],
      color: setColor("red"),
    },
  ];

  const props = (
    <div className={classNames("grid grid-cols-1 md:grid-cols-2 gap-5")}>
      {dataArr.map((item, index) => (
        <div
          key={index}
          className={classNames(
            "border-[#cdcdcd] border-[1px] rounded-md p-mainPadding flex flex-col justify-center items-center gap-2 text-center"
          )}
        >
          <FontAwesomeIcon
            style={{color: icons[index].color}}
            className={classNames("text-3xl")}
            icon={icons[index].value}
          />
          <h3 className={classNames("text-3xl font-bold")}>{item.value}</h3>
          <p className={classNames("text-grey text-[14px]")}>{item.title}</p>
        </div>
      ))}
    </div>
  );

  return (
    <Section
      title={"Tickets Statistics"}
      description={"Everything About Support Tickets"}
      props={props}
    />
  );
};

export default TicketsStatistics;
