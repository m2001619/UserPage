import React from "react";
import classNames from "classnames";
import Welcome from "./Component/Welcome";
import QuickDraft from "./Component/QuickDraft";
import YearlyTargets from "./Component/YearlyTargets";
import TicketsStatistics from "./Component/TicketsStatistics";
import LatestNews from "./Component/LatestNews";
import LatestTasks from "./Component/LatestTasks";
import TopSearchItems from "./Component/TopSearchItems";
import LatestUploads from "./Component/LatestUploads";
import LastProjectProgress from "./Component/LastProjectProgress";
import Reminders from "./Component/Reminders";
import LatestPost from "./Component/LatestPost";
import SocialMediaStats from "./Component/SocialMediaStats";
import Projects from "./Component/Projects";
import Title from "../../GlobalComponent/Title";

const Dashboard = () => {
  return (
    <>
      <Title title={"Dashboard"} />
      <div
        className={classNames("w-full grid grid-cols-1 xl:grid-cols-2 gap-5")}
      >
        <Welcome />
        <QuickDraft />
        <YearlyTargets />
        <TicketsStatistics />
        <LatestNews />
        <LatestTasks />
        <TopSearchItems />
        <LatestUploads />
        <LastProjectProgress />
        <Reminders />
        <LatestPost />
        <SocialMediaStats />
        <Projects />
      </div>
    </>
  );
};

export default Dashboard;
