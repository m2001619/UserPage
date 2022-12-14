import React from "react";
import classNames from "classnames";

const Title = ({ title }: { title: string }) => {
  return (
    <div className={classNames("w-max mb-6")}>
      <h1 className={classNames("text-4xl font-bold")}>{title}</h1>
      <div className={classNames("w-3/4 h-1 relative bg-white mt-3")}>
        <span className={classNames("absolute bg-black h-full w-1/3")}></span>
      </div>
    </div>
  );
};

export default Title;
