import React, { useState } from "react";
import Section from "../../../GlobalComponent/Section";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import {localErrorMessage} from "../Settings";

const GeneralInfo = () => {
  // Use Form Context method from React Hook Form
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // Access the change for password
  const [change, setChange] = useState(false);

  // Props Component
  const props = (
    <div className={classNames("flex flex-col gap-4")}>
      <div>
        <h3 className={classNames("text-[14px] text-grey font-medium")}>
          First Name
        </h3>
        <input
          style={{ outline: "none" }}
          className={classNames(
            "border-[1px] border-[#ccc] rounded-md py-1 px-2 w-full mt-2 placeholder:text-[14px] placeholder:text-grey"
          )}
          placeholder={"First Name"}
          {...register("generalInfo.firstName")}
        />
        {localErrorMessage("generalInfo.firstName",errors)}
      </div>
      <div>
        <h3 className={classNames("text-[14px] text-grey font-medium")}>
          Last Name
        </h3>
        <input
          style={{ outline: "none" }}
          className={classNames(
            "border-[1px] border-[#ccc] rounded-md py-1 px-2 w-full mt-2 placeholder:text-[14px] placeholder:text-grey"
          )}
          placeholder={"Last Name"}
          {...register("generalInfo.lastName")}
        />
        {localErrorMessage("generalInfo.lastName",errors)}
      </div>
      <div>
        <h3 className={classNames("text-[14px] text-grey font-medium")}>
          Email
        </h3>
        <div>
          <div className={classNames("flex gap-4")}>
            <input
              style={{ outline: "none" }}
              className={classNames(
                "border-[1px] border-[#ccc] rounded-md py-1 px-2 w-full mt-2 placeholder:text-[14px] placeholder:text-grey placeholder:text-grey",
                {
                  "bg-[#f0f4f8] cursor-no-drop text-grey text-[13px] opacity-70":
                    !change,
                }
              )}
              placeholder={"Your Email"}
              readOnly={!change}
              {...register("generalInfo.email")}
            />
            <button
              type={"button"}
              className={classNames(
                "w-24 text-center text-localBlue font-medium",
                { "opacity-50 cursor-no-drop": change }
              )}
              onClick={() => {
                setChange(() => true);
              }}
            >
              Change
            </button>
          </div>
          {localErrorMessage("generalInfo.email",errors)}
        </div>
      </div>
    </div>
  );

  return (
    <Section
      title={"General Info"}
      description={"General Information About Your Account"}
      props={props}
    />
  );
};

export default GeneralInfo;
