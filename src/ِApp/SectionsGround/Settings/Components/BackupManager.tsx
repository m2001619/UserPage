import React from "react";
import Section from "../../../GlobalComponent/Section";
import { useFormContext } from "react-hook-form";
import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackupManager = () => {
  // "useFormContext" Method form "React-Hook-Form" toolkit
  const { setValue, watch } = useFormContext();

  // Time Radio Group elements
  const timeDataArr = ["daily", "weekly", "monthly"];

  // Location Radio Group elements
  const locationDataArr = ["megaman", "zero", "sigma"];

  // Props Component
  const props = (
    <div>
      <RadioGroup
        value={watch("backupManager.time")}
        onChange={(value) => setValue("backupManager.time", value)}
        className={classNames("border-b-[1px] border-lightGrey pb-2")}
      >
        {timeDataArr.map((item) => (
          <RadioGroup.Option key={item} value={item}>
            {({ checked }) => (
              <li
                className={classNames(
                  "flex items-center gap-2 mb-3 cursor-pointer"
                )}
              >
                <div
                  className={classNames(
                    "w-5 h-5 rounded-full border-2 flex justify-center items-center",
                    { "border-grey": !checked },
                    { "border-localBlue": checked }
                  )}
                >
                  <span
                    className={classNames(
                      "w-3/4 h-3/4 rounded-full bg-localBlue transition-all duration-300",
                      { "w-0 h-0": !checked }
                    )}
                  />
                </div>
                <p className={classNames("font-medium")}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              </li>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      <RadioGroup
        value={watch("backupManager.location")}
        onChange={(value) => setValue("backupManager.location", value)}
        className={classNames("grid grid-cols-1 md:grid-cols-3 gap-2 mt-5")}
      >
        {locationDataArr.map((item) => (
          <RadioGroup.Option key={item} value={item}>
            {({ checked }) => (
              <li
                className={classNames(
                  "h-20 border-2 rounded-md flex flex-col items-center justify-center gap-2 cursor-pointer",
                  { "border-lightGrey": !checked },
                  { "border-localBlue": checked }
                )}
              >
                <FontAwesomeIcon
                  icon={["fas", "server"]}
                  className={classNames({ "text-localBlue": checked })}
                />
                <p
                  className={classNames("font-medium", {
                    "text-localBlue": checked,
                  })}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </p>
              </li>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );

  return (
    <Section
      title={"Backup Manager"}
      description={"Control Backup Time And Location"}
      props={props}
    />
  );
};

export default BackupManager;
