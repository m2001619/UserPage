import React  from "react";
import Section from "../../../GlobalComponent/Section";
import classNames from "classnames";
import Toggle from "../../../GlobalComponent/Toggle";
import { useFormContext } from "react-hook-form";

const SecurityInfo = () => {

  // "useFormContext" Method form "React-Hook-Form" toolkit
  const { setValue, getValues, watch } = useFormContext();

  // When change toggle value
  const onClickToggle = (value: boolean) => {
    setValue("securityInfo.twoFactorAuth", value);
  };

  // Props Component
  const props = (
    <div>
      <div
        className={classNames("flex justify-between items-center mb-5 gap-2")}
      >
        <div>
          <h3 className={classNames("font-medium")}>Password</h3>
          <p className={classNames("mt-1 text-[13px] text-grey font-medium")}>
            Last Change On {getValues("securityInfo.password.updateTime")}
          </p>
        </div>
        <button
          type={"button"}
          className={classNames(
            "bg-localBlue px-2 py-1 rounded-md text-white font-medium")}
        >
          Change
        </button>
      </div>
      <div
        className={classNames(
          "flex justify-between items-center mb-5 pt-5 border-t-[1px] border-[#eee]"
        )}
      >
        <div>
          <h3 className={classNames("font-medium")}>
            Two-Factor Authentication
          </h3>
          <p className={classNames("mt-1 text-[13px] text-grey font-medium")}>
            Enable/Disable The Feature
          </p>
        </div>
        <Toggle onClickToggle={onClickToggle} value={watch("securityInfo.twoFactorAuth")} />
      </div>
      <div
        className={classNames(
          "flex justify-between items-center mb-5 pt-5 border-t-[1px] border-[#eee]"
        )}
      >
        <div>
          <h3 className={classNames("font-medium")}>Devices</h3>
          <p className={classNames("mt-1 text-[13px] text-grey font-medium")}>
            Check The Login Devices List
          </p>
        </div>
        <button
          type={"button"}
          className={classNames("bg-[#eee] px-2 py-1 rounded-md font-medium")}
        >
          Devices
        </button>
      </div>
    </div>
  );

  return (
    <Section
      title={"Security Info"}
      description={"Security Information About Your Account"}
      props={props}
    />
  );
};

export default SecurityInfo;
