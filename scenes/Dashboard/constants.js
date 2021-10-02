import {
  DashboardIcon,
  BellIcon,
  QuestionMarkIcon,
  GearIcon,
} from "@icons/index";

import Home from "./components/Home";
import Notification from "./components/Notification";
import Setting from "./components/Setting";
import Help from "./components/Help";

export const TABS = [
  {
    Icon: DashboardIcon,
    label: "Dashboard",
    endpoint: "/dashboard/home",
    Section: Home,
  },
  {
    Icon: BellIcon,
    label: "Notification",
    endpoint: "/dashboard/notification",
    Section: Notification,
  },
  {
    Icon: QuestionMarkIcon,
    label: "Help",
    endpoint: "/dashboard/help",
    Section: Help,
  },
  {
    Icon: GearIcon,
    label: "Setting",
    endpoint: "/dashboard/setting",
    Section: Setting,
  },
];
