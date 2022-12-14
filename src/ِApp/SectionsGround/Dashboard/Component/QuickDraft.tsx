import React from "react";
import Section from "../../../GlobalComponent/Section";
import classNames from "classnames";
import Button from "../../../GlobalComponent/Button";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const QuickDraft = () => {
  // Alert Sweet Constructor
  const myAlert = withReactContent(Swal);

  // React Hook Form useForm Method
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ title: string; idea: string }>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      title: "",
      idea: "",
    },
  });

  // Submit Successfully
  const onSubmitSuccessfully = handleSubmit((res) => {
    console.log(res);
    reset();
    myAlert.fire({
      icon: "success",
      title: "Success",
      text: "your ideas have been sent",
    }).then(r => console.log(r));
  });

  // Props Component
  const props = (
    <div>
      <div className={classNames("mb-mainMargin")}>
        <input
          style={{ outlineStyle: "none" }}
          placeholder={"Title"}
          className={classNames(
            "w-full bg-lightGrey py-1.5 px-2 rounded-md placeholder-gray-600 text-[14px]"
          )}
          {...register("title", { required: "Write the title please" })}
        />
        <p className={classNames("text-[14px] ml-1 mt-2 text-red-700")}>
          {errors.title?.message}
        </p>
      </div>
      <div className={classNames("mb-mainMargin")}>
        <textarea
          rows={10}
          style={{ outlineStyle: "none" }}
          placeholder={"Your Thought"}
          className={classNames(
            "w-full bg-lightGrey py-1.5 px-2 rounded-md placeholder-gray-600 text-[14px]"
          )}
          {...register("idea", { required: "Write your idea, please" })}
        />
        <p className={classNames("text-[14px] mt-1 ml-1 text-red-700")}>
          {errors.idea?.message}
        </p>
      </div>
      <div className={classNames("flex justify-end")}>
        <Button
          bgColor={"blue"}
          textColor={"white"}
          text={"save"}
          onClick={onSubmitSuccessfully}
        />
      </div>
    </div>
  );

  return (
    <Section
      title={"Quick Draft"}
      description={"Write A Draft For Your Ideas"}
      props={props}
    />
  );
};

export default QuickDraft;
