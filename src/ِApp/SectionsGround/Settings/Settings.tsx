import React from "react";
import useBearStore from "../../../GlobalState/useBearStore";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import classNames from "classnames";
import SiteControl from "./Components/SiteControl";
import { SettingsType } from "../../../Inteface/interface";
import GeneralInfo from "./Components/GeneralInfo";
import SecurityInfo from "./Components/SecurityInfo";
import SocialInfo from "./Components/SocialInfo";
import WidgetsControl from "./Components/WidgetsControl";
import BackupManager from "./Components/BackupManager";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors } from "react-hook-form/dist/types/errors";
import Submit from "./Components/Submit";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Title from "../../GlobalComponent/Title";

const Settings = () => {
  // Get component data Form the global state
  const settings = useBearStore((state) => state.infoArr.settings);

  // React Hook Form useForm Method
  const method = useForm<SettingsType>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: settings,
  });

  // Alert Sweet Constructor
  const myAlert = withReactContent(Swal);

  return (
    <>
      <Title title={"Settings"} />
      <FormProvider {...method}>
        <form
          className={classNames("w-full grid grid-cols-1 xl:grid-cols-2 gap-5")}
          onSubmit={method.handleSubmit(
            (res) => {
              console.log(res);
              myAlert
                .fire({
                  icon: "success",
                  title: "Success",
                  text: "Your Information Saved Successfully",
                })
                .then((r) => console.log(r));
            },
            () => console.log(method.formState.errors)
          )}
        >
          <SiteControl />
          <GeneralInfo />
          <SecurityInfo />
          <SocialInfo />
          <WidgetsControl />
          <BackupManager />
          <Submit />
        </form>
      </FormProvider>
    </>
  );
};

export default Settings;

// "Schema" method from "Yup" toolkit to Validate the Form's inputs
const schema = yup.object().shape({
  generalInfo: yup.object({
    firstName: yup.string().required("Enter your First Name, please"),
    lastName: yup.string().required("Enter your Last Name, please"),
    email: yup
      .string()
      .email("invalid Email Address")
      .required("Enter your Email Address, please"),
  }),
  socialInfo: yup.object({
    twitter: yup.string().required("Enter user name, please"),
    facebook: yup.string().required("Enter user name, please"),
    youtube: yup.string().required("Enter user name, please"),
    linkedin: yup.string().required("Enter user name, please"),
  }),
});

// "Error Message" hook from "React-Hook-Form" return Error Message to use it in Child Components
export const localErrorMessage = (name: string, errors: FieldErrors<any>) => (
  <ErrorMessage
    errors={errors}
    name={name}
    render={({ message }) => (
      <p className={classNames(" mt-1 text-red-600 text-[14px] font-medium")}>
        {message}
      </p>
    )}
  />
);
