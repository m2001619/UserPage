import React from "react";
import classNames from "classnames";

const Submit = () => {
  return (
    <div className={classNames("xl:col-span-2 flex justify-end")}>
      <input
        type={"submit"}
        value={"Save"}
        className={classNames(
          "py-2 px-3 bg-localBlue text-white font-medium cursor-pointer opacity-90 hover:opacity-100"
        )}
      />
    </div>
  );
};

export default Submit;
