import React from "react";
import useBearStore from "../../../../GlobalState/useBearStore";
import classNames from "classnames";

const Projects = () => {
  // Get the data of the component from the global state
  const dataArr = useBearStore((state) => state.infoArr).dashboard.projects;
  const dataArrKeys = Object.keys(dataArr[0]);

  return (
    <div
      className={classNames(
        "bg-white rounded-lg p-mainPadding mt-5 xl:col-start-1 xl:col-end-3"
      )}
    >
      <div className={classNames("mb-mainMargin")}>
        <h2 className={classNames("font-bold text-2xl")}>{"Projects"}</h2>
      </div>
      <div className={classNames("overflow-x-auto w-full")}>
        <table className={classNames("min-w-[1000px] w-full")}>
          <thead className={classNames("table-header-group")}>
            <tr>
              {dataArrKeys.map((item, index) => (
                <td
                  className={classNames("p-4 font-bold bg-[#eee]")}
                  key={index}
                >
                  {setFormatTitle(item)}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataArr.map((item, index) => (
              <tr key={index}>
                <td
                  className={classNames(
                    "font-medium px-4 py-mainPadding border-[0.3px] border-[#eee] text-[15px]"
                  )}
                >
                  {item.name}
                </td>
                <td
                  className={classNames(
                    "font-medium px-4 py-mainPadding border-[0.3px] border-[#eee] text-[15px]"
                  )}
                >
                  {item.finishDate}
                </td>
                <td
                  className={classNames(
                    "font-medium px-4 py-mainPadding border-[0.3px] border-[#eee] text-[15px]"
                  )}
                >
                  {item.client}
                </td>
                <td
                  className={classNames(
                    "font-medium px-4 py-mainPadding border-[0.3px] border-[#eee] text-[15px]"
                  )}
                >
                  ${item.price}
                </td>
                <td
                  className={classNames(
                    "px-4 py-mainPadding border-[0.3px] border-[#eee] flex"
                  )}
                >
                  {teamImagesArray(item.team).map((item, index) => (
                    <img
                      key={index}
                      src={item}
                      alt={"img"}
                      className={classNames(
                        "w-7 h-7 rounded-full border-2 border-white -ml-2"
                      )}
                    />
                  ))}
                </td>
                <td
                  className={classNames(
                    "font-medium px-4 py-mainPadding border-[0.3px] border-[#eee]"
                  )}
                >
                  <span
                    className={classNames(
                      "py-1 px-2 rounded-md text-[14px] font-semibold text-white cursor-default",
                      { "bg-localOrange": item.status === "Pending" },
                      { "bg-localBlue": item.status === "In Progress" },
                      { "bg-localGreen": item.status === "Completed" },
                      { "bg-localRed": item.status === "Rejected" }
                    )}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;

// Set To Format title
const setFormatTitle = (word: string): string => {
  return word
    .split("")
    .map((item, index) =>
      index === 0
        ? item.toUpperCase()
        : item.toUpperCase() === item
        ? ` ${item}`
        : item
    )
    .join("");
};

// Team's Images Array
const teamImagesArray = (length: number): string[] => {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(require(`../../../../img/team-0${i}.png`));
  }
  return arr;
};
