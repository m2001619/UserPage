import React from "react";
import {setColor} from "../../Inteface/interface";

const Button = ({
  bgColor,
  textColor,
  text,
  onClick
}: {
  bgColor: string;
  textColor: string;
  text: string;
  onClick?: () => void
}) => {

  return (
    <button
      type={"button"}
      style={{background: setColor(bgColor), color: setColor(textColor)}}
      className={`py-1 px-2 rounded-md text-[14px] font-semibold cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
