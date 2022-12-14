import React from "react";
import useBearStore from "../../../../GlobalState/useBearStore";
import Section from "../../../GlobalComponent/Section";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

const LatestPost = () => {
  // React Hook Form useForm Method
  const { register, setValue, watch} =
    useForm<{
      like: boolean;
      comment: string;
    }>({
      defaultValues: {
        like: false,
        comment: "",
      },
    });

  // Get the data of the component from the global state
  const data = useBearStore((state) => state.infoArr).dashboard.latestPost;

  // Props Component
  const props = (
    <div className={classNames("flex flex-col")}>
      <div
        className={classNames(
          "flex items-center gap-4 pb-mainPadding border-b-[1px] border-lightGrey"
        )}
      >
        <img
          src={require("../../../../img/avatar.png")}
          alt={"img"}
          className={classNames("h-12 w-12 rounded-md")}
        />
        <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href={""} className={classNames("font-bold mb-2")}>
            {data.user}
          </a>
          <p className={classNames("text-grey font-medium text-[16px]")}>
            {data.date}
          </p>
        </div>
      </div>
      <p
        className={classNames(
          "py-mainPadding border-b-[1px] border-lightGrey leading-7"
        )}
      >
        {data.postText}
      </p>
      <div className={classNames("pt-mainPadding flex justify-between")}>
        <div
          className={classNames(
            "flex items-center gap-1 text-grey cursor-pointer"
          )}
          onClick={() => {
            setValue("like", !watch("like"));
          }}
        >
          <FontAwesomeIcon
            className={classNames({
              "text-localRed": watch("like"),
            })}
            icon={watch("like") ? ["fas", "heart"] : ["far", "heart"]}
          />
          <p
            className={classNames({
              "text-localRed font-semibold": watch("like"),
            })}
          >
            {data.likesCount}
          </p>
        </div>
        <div
          className={classNames(
            "flex items-center gap-1 text-grey cursor-pointer"
          )}
        >
          <FontAwesomeIcon icon={["far", "comments"]} />
          <p>{data.commentsCount}</p>
        </div>
      </div>
      <div className={classNames("mt-4")}>
        <input
          style={{ outline: "none" }}
          className={classNames(
            "w-full border-[1px] border-grey rounded-xl p-2"
          )}
          placeholder={"Write Something"}
          {...register("comment")}
        />
      </div>
    </div>
  );

  return <Section title={"Latest Post"} props={props} />;
};

export default LatestPost;
