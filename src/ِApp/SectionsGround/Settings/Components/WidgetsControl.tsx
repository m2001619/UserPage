import React from "react";
import Section from "../../../GlobalComponent/Section";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WidgetsControl = () => {
  // "useFormContext" Method form "React-Hook-Form" toolkit
  const { setValue, watch } = useFormContext();

  // Get the data of the component from the global state
  const dataKeysArr: string[] = Object.keys(watch("widgetsControl"));
  const dataValuesArr: boolean[] = Object.values(watch("widgetsControl"));

  // Props Component
  const props = (
    <div>
      {dataKeysArr.map((item, index) => (
        <div
          key={index}
          className={classNames("flex items-center gap-3 mb-4 cursor-pointer")}
          onClick={() =>
            setValue(`widgetsControl.${item}`, !dataValuesArr[index])
          }
        >
          <button
            type={"button"}
            className={classNames(
              "w-4 h-4",
              {
                "border-grey border-2 rounded-sm hover:border-localBlue":
                  !dataValuesArr[index],
              },
              {
                "rounded-sm bg-localBlue flex justify-center items-center text-white text-[12px] font-bold transition-all duration-300":
                  dataValuesArr[index],
              }
            )}
          >
            {dataValuesArr[index] && (
              <FontAwesomeIcon icon={["fas", "check"]} />
            )}
          </button>
          <p>{formatWord(item)}</p>
        </div>
      ))}
    </div>
  );

  return (
    <Section
      title={"Widgets Control"}
      description={"Show/Hide Widgets"}
      props={props}
    />
  );
};

export default WidgetsControl;

// Format the work to be in local format, exp : quickDraft => Quick Draft
const formatWord = (word: string) => {
  return word
    .split("")
    .map((char, index) =>
      char === char.toUpperCase()
        ? ` ${char}`
        : index === 0
        ? char.toUpperCase()
        : char
    )
    .join("");
};
