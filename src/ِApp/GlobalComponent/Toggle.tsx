import React from "react";
import classNames from "classnames";
import { setColor } from "../../Inteface/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toggle = ({
  onClickToggle,
  value,
}: {
  onClickToggle: (value: boolean) => void;
  value: boolean;
}) => {
  return (
    <div
      style={{ backgroundColor: value ? setColor("blue") : "#ccc" }}
      className={classNames(
        "relative w-20 h-8 p-1 rounded-2xl cursor-pointer transition-all duration-300"
      )}
      onClick={() => {
        onClickToggle(!value);
      }}
    >
      <span
        style={{
          transition: "all",
          transitionDuration: "300ms",
          right: value ? "5px" : "65%",
        }}
        className={classNames(
          "absolute flex justify-center items-center w-6 h-6 rounded-full bg-white text-grey"
        )}
      >
        <FontAwesomeIcon icon={value ? ["fas", "check"] : ["fas", "xmark"]} />
      </span>
    </div>
  );
};

export default Toggle;
