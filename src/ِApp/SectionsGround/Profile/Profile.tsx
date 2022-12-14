import React from "react";
import classNames from "classnames";
import UserInfo from "./Components/UserInfo";
import MySkills from "./Components/MySkills";
import LatestActivities from "./Components/LatestActivities";
import Title from "../../GlobalComponent/Title";

const Profile = () => {
  return (
    <>
      <Title title={"Profile"} />
      <div
        className={classNames("w-full grid grid-cols-1 xl:grid-cols-3 gap-5")}
      >
        <UserInfo />
        <div className={classNames("col-span-3 lg:col-span-1")}>
          <MySkills />
        </div>
        <div className={classNames("col-span-3 lg:col-span-2")}>
          <LatestActivities />
        </div>
      </div>
    </>
  );
};

export default Profile;
