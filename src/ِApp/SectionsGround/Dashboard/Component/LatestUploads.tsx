import React from "react";
import useBearStore from "../../../../GlobalState/useBearStore";
import Section from "../../../GlobalComponent/Section";
import classNames from "classnames";

const LatestUploads = () => {
  // Get the data of the component from the global state
  const dataArr = useBearStore((state) => state.infoArr).dashboard
    .latestUploads;

  // Props Component
  const props = (
    <ul className={classNames("flex flex-col")}>
      {dataArr.map((item, index, array) => (
        <li
          key={index}
          className={classNames(
            "py-3 flex flex-row justify-between items-center",
            {
              "pt-0": index === 0,
              "pb-0": index === array.length - 1,
              "border-b-[1px] border-lightGrey": index !== array.length - 1,
            }
          )}
        >
          <div className={classNames("flex items-center gap-3")}>
            <img
              src={setIconFile(item.fileName)}
              alt={"img"}
              className={classNames("w-10 rounded-md")}
            />
            <div>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href={""} className={classNames("font-bold md:mb-2")}>
                {item.fileName}
              </a>
              <a
                href={item.userName}
                className={classNames(
                  "hover:text-localBlue block text-[14px] text-grey font-medium"
                )}
              >
                {item.userName}
              </a>
            </div>
          </div>
          <span
            className={classNames(
              "text-[12px] font-medium bg-lightGrey py-1 px-2 rounded-md"
            )}
          >
            {item.fileSize}
          </span>
        </li>
      ))}
    </ul>
  );

  return <Section title={"Latest Uploads"} props={props} />;
};

export default LatestUploads;

// return the icon for the file type
const setIconFile = (fileName: string): string => {
  const fileType = fileName.split(".")[1];
  switch (fileType) {
    case "pdf":
      return require("../../../../img/pdf.png");
    case "avi":
      return require("../../../../img/avi.png");
    case "psd":
      return require("../../../../img/psd.png");
    case "zip":
      return require("../../../../img/zip.png");
    case "dll":
      return require("../../../../img/dll.png");
    case "eps":
      return require("../../../../img/eps.png");
    default:
      return "";
  }
};
