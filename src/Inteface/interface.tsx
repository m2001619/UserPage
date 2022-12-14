import { IconName } from "@fortawesome/fontawesome-common-types";
import { IconPrefix } from "@fortawesome/fontawesome-svg-core";

export type IconType = [IconPrefix, IconName];

export interface InfoArr {
  dashboard: DashboardType;
  settings: SettingsType;
  profile: ProfileType;
  projects: ProjectsType;
  courses: CoursesType;
  friends: FriendsType;
  files: FilesType;
}

export const setColor = (text: string) => {
  switch (text) {
    case "lightGrey":
      return "rgb(238, 238, 238)";
    case "grey":
      return "#888";
    case "blue":
      return "#0075ff";
    case "lightBlue":
      return "#0d69d5";
    case "orange":
      return "#f59e0b";
    case "green":
      return "#22c55e";
    case "red":
      return "#f44336";
    default:
      return text;
  }
};

export interface DashboardType {
  id: string;
  title: string;
  userInfo: {
    name: string;
    job: string;
    projects: number;
    salary: number;
  };
  yearlyTarget: { title: string; average: number; thisYear: number }[];
  ticketsStatistics: { title: string; value: number }[];
  latestTasks: { title: string; description: string }[];
  latestNews: {
    img: string;
    title: string;
    description: string;
    date: string;
  }[];
  topSearchItems: { keyword: string; searchCount: number }[];
  latestUploads: {
    fileName: string;
    userName: string;
    fileSize: string;
  }[];
  lastProjectProgress: { text: string; status: string }[];
  Reminders: { text: string; date: string }[];
  latestPost: {
    user: string;
    date: string;
    postText: string;
    likesCount: string;
    commentsCount: string;
  };
  socialMediaStats: { name: string; stat: string; StatType: string }[];
  projects: {
    name: string;
    finishDate: string;
    client: string;
    price: string;
    team: number;
    status: string;
  }[];
}

export interface SettingsType {
  id: string;
  title: string;
  siteControl: {
    websiteControl: boolean;
    message: string;
  };
  generalInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  securityInfo: {
    password: {
      value: string;
      updateTime: string;
    };
    twoFactorAuth: boolean;
    devices: string[];
  };
  socialInfo: {
    twitter: string;
    facebook: string;
    youtube: string;
    linkedin: string;
  };
  widgetsControl: {
    quickDraft: boolean;
    yearlyTargets: boolean;
    ticketsStatistics: boolean;
    latestNews: boolean;
    latestTasks: boolean;
    topSearchItems: boolean;
  };
  backupManager: {
    time: string;
    location: string;
  };
}

export type ProfileType = {
  id: string;
  title: string;
  userInfo: {
    name: string;
    level: {
      totalLevel: number;
      userLevel: number;
    };
    rating: {
      stars: number;
      count: number;
    };
  };
  infos: {
    title: string;
    value: {
      name: string;
      value: string;
    }[];
  }[];
  mySkills: string[][];
  latestActivities: {
    title: string;
    description: string;
    time: string;
    date: string;
  }[];
};

export type ProjectsType = {
  id: string;
  title: string;
  projectsInfo: {
    title: string;
    description: string;
    date: string;
    team: number;
    skills: string[];
    cost: number;
    budget: number;
  }[];
};

export type CoursesType = {
  id: string;
  title: string;
  coursesInfo: {
    title: string;
    description: string;
    link: string;
    subscribes: number;
    price: number;
  }[];
};

export type FriendsType = {
  id: string;
  title: string;
  friendsInfo: {
    phone: string;
    mail: string;
    name: string;
    job: string;
    friends: number;
    projects: number;
    articles: number;
    date: string;
    profile: string;
  }[];
};

export type FilesType = {
  id: string;
  title: string;
  filesInfo: {
    downloadLink: string;
    fileName: string;
    admin: string;
    date: string;
    size: string;
  }[];
  uploadFiles: {
    fileName: string;
    count: number;
    size: string;
  }[];
};
