import React from "react";
import Section from "../../../GlobalComponent/Section";
import classNames from "classnames";
import Toggle from "../../../GlobalComponent/Toggle";
import { useFormContext } from "react-hook-form";

const SiteControl = () => {
  // "useFormContext" Method form "React Hook Form"
  const { register, setValue, watch } = useFormContext();

  // When change toggle value
  const onClickToggle = (value: boolean) => {
    setValue("siteControl.websiteControl", value);
  };

  const props = (
    <div>
      <div className={"flex justify-between items-center"}>
        <div>
          <p>Website Control</p>
          <p className={classNames("text-[14px] text-grey mt-1")}>
            Open/Close Website And Type The Reason
          </p>
        </div>
        <div>
          <Toggle onClickToggle={onClickToggle} value={watch("siteControl.websiteControl")} />
        </div>
      </div>
      <textarea
        rows={5}
        style={{ outline: "none" }}
        className={classNames(
          "placeholder:text-[14px] placeholder:text-grey w-full mt-5 min-h-[150px] border-[1px] border-[#ccc] rounded-md p-2"
        )}
        placeholder={"Close Message Content"}
        {...register("siteControl.message")}
      />
    </div>
  );

  return (
    <Section
      title={"Site Control"}
      description={"Control The Website If There Is Maintenance"}
      props={props}
    />
  );
};

export default SiteControl;
