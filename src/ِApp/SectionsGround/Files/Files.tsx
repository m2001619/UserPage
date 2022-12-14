import React from "react";
import useBearStore from "../../../GlobalState/useBearStore";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { IconName } from "@fortawesome/fontawesome-common-types";
import Title from "../../GlobalComponent/Title";

const Files = () => {
  // Get the data of the component from the global state
  const filesArr = useBearStore((state) => state.infoArr).files.filesInfo;
  const uploadFiles = useBearStore((state) => state.infoArr).files.uploadFiles;

  return (
    <>
      <Title title={"Files"} />
      <div className={classNames("flex flex-col-reverse md:flex-row gap-5")}>
        <ul
          className={classNames(
            "w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5"
          )}
        >
          {filesArr.map((item, index) => (
            <li
              key={index}
              className={classNames("p-3 bg-white rounded-lg relative")}
            >
              <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href={"#"}
                  className={classNames(
                    "text-grey text-[#666] hover:text-localBlue"
                  )}
                >
                  <FontAwesomeIcon icon={["fas", "download"]} />
                </a>
                <div
                  className={classNames(
                    "flex flex-col items-center gap-1 mb-2"
                  )}
                >
                  <img
                    src={setImageFile(item.fileName)}
                    alt={""}
                    className={classNames(
                      "w-16 h-16 mb-2 hover:rotate-[10deg] transition-all duration-300"
                    )}
                  />
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href={"#"}>
                    <h3 className={classNames("font-medium text-[14px]")}>
                      {item.fileName}
                    </h3>
                  </a>
                </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href={"#"}
                  className={classNames(
                    " text-[14px] text-grey font-medium w-max"
                  )}
                >
                  {item.admin}
                </a>
              </div>
              <div
                className={classNames(
                  "pt-2 border-t-[1px] mt-2 flex justify-between text-grey text-[13px] font-medium"
                )}
              >
                <span>{item.date}</span>
                <span>{item.size}MB</span>
              </div>
            </li>
          ))}
        </ul>
        <div
          className={classNames(
            "col-span-1 h-max p-mainPadding bg-white rounded-lg relative"
          )}
        >
          <h2 className={classNames("text-2xl font-bold mb-4")}>
            Files Statistics
          </h2>
          <ul className={classNames("flex flex-col gap-4")}>
            {uploadFiles.map((item, index) => (
              <li
                key={index}
                className={classNames(
                  "md:w-52 border-[1px] rounded-md p-2 flex justify-between items-center"
                )}
              >
                <div className={classNames("flex items-center gap-2")}>
                  <span
                    className={classNames(
                      "w-10 h-10 flex justify-center items-center font-medium",
                      { "bg-[#0075ff33] text-localBlue": index % 4 === 0 },
                      { "bg-[#22c55e33] text-localGreen": index % 4 === 1 },
                      { "bg-[#f4433633] text-localRed": index % 4 === 2 },
                      { "bg-[#f59e0b33] text-localOrange": index % 4 === 3 }
                    )}
                  >
                    <FontAwesomeIcon icon={setFileIcon(item.fileName)} />
                  </span>
                  <div
                    className={classNames(
                      "h-full flex flex-col justify-between text-[13px] font-medium"
                    )}
                  >
                    <p>{item.fileName}</p>
                    <p className={classNames("text-grey")}>{item.count}</p>
                  </div>
                </div>
                <p className={classNames("text-grey text-[13px] font-medium")}>
                  {item.size}
                </p>
              </li>
            ))}
          </ul>
          <div
            className={classNames(
              "hover:animate-UpAndDown first:animate-UpAndDown flex p-2 justify-center gap-3 items-center w-28 rounded-md text-white mt-4 bg-localBlue text-[14px] cursor-pointer hover:bg-[#0d69d5] mx-auto"
            )}
          >
            <FontAwesomeIcon icon={["fas", "angles-up"]} />
            <span>Upload</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Files;

// return the Image for the file type
const setImageFile = (fileName: string): string => {
  const fileType = fileName.split(".")[1];
  switch (fileType) {
    case "pdf":
      return require("../../../img/pdf.png");
    case "avi":
      return require("../../../img/avi.png");
    case "psd":
      return require("../../../img/psd.png");
    case "zip":
      return require("../../../img/zip.png");
    case "dll":
      return require("../../../img/dll.png");
    case "eps":
      return require("../../../img/eps.png");
    case "png":
      return require("../../../img/png.png");
    default:
      return "";
  }
};

// return the icon for the file type
const setFileIcon = (fileName: string): [IconPrefix, IconName] => {
  const fileType = fileName.split(" ")[0].toLowerCase();
  switch (fileType) {
    case "pdf":
      return ["far", "file-pdf"];
    case "images":
      return ["far", "images"];
    case "word":
      return ["far", "file-word"];
    case "zip":
      return ["fas", "file-csv"];
    default:
      return ["fas", "file-csv"];
  }
};
