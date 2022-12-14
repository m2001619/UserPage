import React from "react";
import Section from "../../../GlobalComponent/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { IconName } from "@fortawesome/fontawesome-common-types";
import { useFormContext } from "react-hook-form";
import { localErrorMessage } from "../Settings";

const SocialInfo = () => {
  const socialMediaArr: IconName[] = [
    "twitter",
    "facebook",
    "linkedin",
    "youtube",
  ];

  // "useFormContext" from "React-Hook-Form" toolkit
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // Props Component
  const props = (
    <ul className={classNames("flex flex-col gap-5")}>
      {socialMediaArr.map((item, index) => (
        <li key={index}>
          <div className={classNames("flex")}>
            <div
              className={classNames(
                "p-2 text-grey bg-[#f6f6f6] border-[1px] border-r-0 border-[#ddd] rounded-l-lg icon-social"
              )}
            >
              <FontAwesomeIcon icon={["fab", item]} />
            </div>
            <input
              style={{ outline: "none" }}
              className={classNames(
                "w-full bg-[#f6f6f6] border-[#ddd] border-[1px] pl-2 text-[14px] rounded-r-lg placeholder:text-grey placeholder:font-medium"
              )}
              placeholder={`${
                item.slice(0, 1).toUpperCase() + item.slice(1)
              } Username`}
              {...register(`socialInfo.${item}`)}
            />
          </div>
          {localErrorMessage(`socialInfo.${item}`, errors)}
        </li>
      ))}
    </ul>
  );
  return (
    <Section
      title={"Social Info"}
      description={"Social Media Information"}
      props={props}
    />
  );
};

export default SocialInfo;
