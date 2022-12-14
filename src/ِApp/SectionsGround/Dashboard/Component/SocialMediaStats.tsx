import React from "react";
import useBearStore from "../../../../GlobalState/useBearStore";
import Section from "../../../GlobalComponent/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../GlobalComponent/Button";
import classNames from "classnames";
import {IconType} from "../../../../Inteface/interface";

const SocialMediaStats = () => {
  // Get the data of the component from the global state
  const dataArr = useBearStore((state) => state.infoArr).dashboard
    .socialMediaStats;

  // Props Component
  const props = (
    <ul>
      {dataArr.map((item, index) => (
        <li key={index} className={classNames("flex mb-3")}>
          <div
            style={{ backgroundColor: setColorIcon(item.name).color }}
            className={classNames(
              "w-14 h-14 flex justify-center items-center hover:rotate-6 transition-all duration-300"
            )}
          >
            <FontAwesomeIcon
              icon={setColorIcon(item.name).icon}
              className={classNames("text-3xl text-white")}
            />
          </div>
          <div style={{backgroundColor: setColorIcon(item.name).bgColor}} className={classNames("w-full flex justify-between items-center px-mainPadding")}>
            <p>{item.stat}</p>
            <Button
              bgColor={setColorIcon(item.name).color}
              textColor={"white"}
              text={item.StatType}
            />
          </div>
        </li>
      ))}
    </ul>
  );

  return <Section title={"Social Media Stats"} props={props} />;
};

export default SocialMediaStats;

// set Color for each item of social media
const setColorIcon = (
  name: string
): { bgColor: string; color: string; icon: IconType } => {
  switch (name) {
    case "twitter":
      return { color: "#1da1f2", bgColor: "#1da1f233", icon: ["fab","twitter"] };
    case "facebook":
      return { color: "#1877f2", bgColor: "#1877f233", icon: ["fab","facebook-f"] };
    case "youtube":
      return { color: "#ff0000", bgColor: "#ff000033", icon: ["fab","youtube"] };
    case "linkedin":
      return { color: "#0077b5", bgColor: "#0077b533", icon: ["fab","linkedin"] };
    default:
      return { bgColor: "", color: "", icon: ["fab","twitter"]};
  }
};
