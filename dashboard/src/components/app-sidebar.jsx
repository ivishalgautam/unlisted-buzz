"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { sidebarData } from "@/data/routes";
import { MainContext } from "@/store/context";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }) {
  const { user } = React.useContext(MainContext);
  const filteredRoutes = sidebarData
    .filter((route) => route.roles.includes(user?.role))
    .map((item) => {
      return {
        ...item,
        items: item.items.filter(
          (item) => item.roles.includes(user?.role) && item.isVisible,
        ),
      };
    });

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={filteredRoutes} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
