import React from "react";
import Section from "../../../GlobalComponent/Section";
import useBearStore from "../../../../GlobalState/useBearStore";
import classNames from "classnames";

const TopSearchItems = () => {
  // Get the data of the component from the global state
  const dataArr = useBearStore((state) => state.infoArr).dashboard
    .topSearchItems;

  // Props Component
  const props = (
    <div>
        <div className={classNames("flex justify-between")}>
          <ul className={classNames("flex flex-col gap-8")}>
            <li className={classNames("text-grey font-medium")}>Keyword</li>
            {dataArr.map((item,index) => <li key={index}>{item.keyword}</li>)}
          </ul>
          <ul className={classNames("flex flex-col gap-8 items-end")}>
            <li className={classNames("text-grey font-medium")}>Search Count</li>
            {dataArr.map((item,index) => <li className={"text-[13px] py-1 px-2 bg-lightGrey rounded-md font-medium"} key={index}>{item.searchCount}</li>)}
          </ul>
        </div>
    </div>
  );

  return <Section title={"Top Search Items"} props={props} />;
};

export default TopSearchItems;
