import React, { ReactElement } from "react";
import classNames from "classnames";

const Section = ({
  title,
  description,
  props,
}: {
  title: string;
  description?: string;
  props: ReactElement;
}) => {
  return (
    <div className={classNames("bg-white rounded-lg p-mainPadding")}>
      <div className={classNames("mb-mainMargin")}>
        <h2 className={classNames("font-bold text-2xl")}>{title}</h2>
        <p className={classNames("text-grey mt-1")}>{description}</p>
      </div>
      {props}
    </div>
  );
};

export default Section;
