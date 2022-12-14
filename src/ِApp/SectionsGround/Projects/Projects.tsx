import React from "react";
import useBearStore from "../../../GlobalState/useBearStore";
import classNames from "classnames";
import Title from "../../GlobalComponent/Title";

const Projects = () => {
  // Get the data of the component from the global state
  const projectsArr = useBearStore((state) => state.infoArr).projects
    .projectsInfo;

  return (
    <>
      <Title title={"Projects"}/>
      <ul
        className={classNames("w-full grid grid-cols-1 xl:grid-cols-2 gap-5")}
      >
        {projectsArr.map((item, index) => (
          <li
            key={index}
            className={classNames("bg-white rounded-lg p-mainPadding relative")}
          >
            <span
              className={classNames(
                "absolute right-2 top-2 text-[14px] text-grey font-medium"
              )}
            >
              {item.date}
            </span>
            <div>
              <h3 className={classNames("font-medium mb-2")}>{item.title}</h3>
              <p className={classNames("text-[14px] text-grey font-medium")}>
                {item.description}
              </p>
            </div>
            <div className={classNames("flex mt-10 ml-3")}>
              {teamImagesArray(item.team).map((item, index) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  key={index}
                  href={"#"}
                  className={classNames(
                    "w-10 h-10 rounded-full -ml-3 border-white border-2 hover:z-10"
                  )}
                >
                  <img
                    src={item}
                    alt={"img"}
                    className={classNames("w-full h-full rounded-full")}
                  />
                </a>
              ))}
            </div>
            <ul
              className={classNames(
                "flex flex-col md:flex-row md:justify-end gap-2 my-5 py-4 border-y-[1px] border-lightGrey"
              )}
            >
              {item.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className={classNames(
                    "w-max px-2 py-1 bg-[#eee] rounded-md text-[14px] font-medium text-[13px]"
                  )}
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div
              className={classNames(
                "flex md:flex-row flex-col md:justify-between justify-center items-center gap-4"
              )}
            >
              <div
                className={classNames(
                  "h-2 w-60 bg-lightGrey rounded-lg relative"
                )}
              >
                <span
                  style={{
                    width: `${(item.cost / item.budget) * 100}%`,
                  }}
                  className={classNames(
                    "absolute h-full left-0 rounded-l-lg",
                    {
                      "rounded-r-lg": item.cost === item.budget,
                    },
                    { "bg-localRed": index % 3 === 0 },
                    { "bg-localGreen": index % 3 === 1 },
                    { "bg-localBlue": index % 3 === 2 }
                  )}
                />
              </div>
              <span className={classNames("text-grey text-[14px] font-medium")}>
                $ {item.cost}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;

// Team's Images Array
const teamImagesArray = (length: number): string[] => {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(require(`../../../img/team-0${i}.png`));
  }
  return arr;
};
