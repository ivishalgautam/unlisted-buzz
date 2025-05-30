import {
  FileText,
  HandCoins,
  LayoutDashboard,
  ListChecks,
  MessageSquareText,
  User,
  Users,
} from "lucide-react";
import { LiaHospitalAltSolid } from "react-icons/lia";

const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

export const sidebarData = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    roles: [ROLES.ADMIN],
    isVisible: true,
    items: [],
  },
  // {
  //   title: "User",
  //   url: "#",
  //   icon: Users,
  //   roles: [ROLES.ADMIN],
  //   isVisible: true,
  //   items: [
  //     {
  //       title: "All Users",
  //       url: "/users",
  //       roles: [ROLES.ADMIN],
  //       isVisible: true,
  //     },
  //     {
  //       title: "Create",
  //       url: "/users/create",
  //       roles: [ROLES.ADMIN],
  //       isVisible: true,
  //     },
  //     {
  //       title: "Edit",
  //       url: "/users/edit/[id]",
  //       roles: [ROLES.ADMIN],
  //       isVisible: false,
  //     },
  //   ],
  // },
  {
    title: "Sectors",
    url: "#",
    icon: FileText,
    roles: [ROLES.ADMIN],
    isVisible: true,
    items: [
      {
        title: "All Sectors",
        url: "/sectors",
        roles: [ROLES.ADMIN],
        isVisible: true,
      },
      {
        title: "Create",
        url: "/sectors/create",
        roles: [ROLES.ADMIN],
        isVisible: true,
      },
      {
        title: "Edit",
        url: "/sectors/edit/[id]",
        roles: [ROLES.ADMIN],
        isVisible: false,
      },
    ],
  },
  {
    title: "Events",
    url: "#",
    icon: FileText,
    roles: [ROLES.ADMIN],
    isVisible: true,
    items: [
      {
        title: "All events",
        url: "/events",
        roles: [ROLES.ADMIN],
        isVisible: true,
      },
      {
        title: "Create",
        url: "/events/create",
        roles: [ROLES.ADMIN],
        isVisible: true,
      },
      {
        title: "Edit",
        url: "/events/edit/[id]",
        roles: [ROLES.ADMIN],
        isVisible: false,
      },
    ],
  },
  {
    title: "Blogs",
    url: "#",
    icon: FileText,
    roles: [ROLES.ADMIN],
    isVisible: true,
    items: [
      {
        title: "All blogs",
        url: "/blogs",
        roles: [ROLES.ADMIN],
        isVisible: true,
      },
      {
        title: "Create",
        url: "/blogs/create",
        roles: [ROLES.ADMIN],
        isVisible: true,
      },
      {
        title: "Edit",
        url: "/blogs/edit/[id]",
        roles: [ROLES.ADMIN],
        isVisible: false,
      },
    ],
  },
  {
    title: "Shares",
    url: "#",
    icon: FileText,
    roles: [ROLES.ADMIN],
    isVisible: true,
    items: [
      {
        title: "All shares",
        url: "/shares",
        roles: [ROLES.ADMIN],
        isVisible: true,
      },
      {
        title: "Create",
        url: "/shares/create",
        roles: [ROLES.ADMIN],
        isVisible: true,
      },
      {
        title: "Edit",
        url: "/shares/edit/[id]",
        roles: [ROLES.ADMIN],
        isVisible: false,
      },
    ],
  },
  // {
  //   title: "Comments",
  //   url: "#",
  //   icon: MessageSquareText,
  //   roles: [ROLES.ADMIN],
  //   isVisible: true,
  //   items: [
  //     {
  //       title: "All comments",
  //       url: "/comments",
  //       roles: [ROLES.ADMIN],
  //       isVisible: true,
  //     },
  //   ],
  // },
  {
    title: "Enquiries",
    url: "#",
    icon: MessageSquareText,
    roles: [ROLES.ADMIN],
    isVisible: true,
    items: [
      {
        title: "All Enquiries",
        url: "/enquiries",
        roles: [ROLES.ADMIN],
        isVisible: true,
      },
    ],
  },
  {
    title: "Queries",
    url: "#",
    icon: MessageSquareText,
    roles: [ROLES.ADMIN],
    isVisible: true,
    items: [
      {
        title: "All Queries",
        url: "/queries",
        roles: [ROLES.ADMIN],
        isVisible: true,
      },
    ],
  },
  {
    title: "Profile Overview",
    url: "/profile",
    icon: User,
    roles: [ROLES.ADMIN],
    isVisible: true,
    items: [],
  },
];

export const publicRoutes = [
  "/",
  "/admin",
  "/register",
  "/reviews/create",
  "/thank-you",
  "/progress",
];
