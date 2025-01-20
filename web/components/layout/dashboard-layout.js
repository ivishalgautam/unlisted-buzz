"use client";
import { MainContext } from "@/store/context";
import React, { useContext, useState } from "react";
import { H4, Muted } from "../typography";
import Image from "next/image";
import config from "@/config";
import { nameShorter } from "@/lib/name-shorter";
import Link from "next/link";
import { Briefcase, DollarSign, ExternalLink, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { title: "My Profile", href: "/profile", icon: User },
  { title: "My Portfolio", href: "/portfolio", icon: Briefcase },
  { title: "Transaction", href: "/transactions", icon: DollarSign },
  {
    title: "External Transaction",
    href: "/external-transactions",
    icon: ExternalLink,
  },
];

export default function DashboardLayout({ children }) {
  const { user, isUserLoading } = useContext(MainContext);
  const [isImgError, setIsImgError] = useState(false);
  const pathname = usePathname();
  if (!user) return;
  if (isUserLoading) return "Loading...";

  return (
    <section className="py-10">
      <div className="container bg-white shadow-sm rounded-xl p-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 divide-y">
            <div className="space-y-2 pb-4">
              <figure className="size-28 mx-auto">
                {isImgError ? (
                  <div className="h-full flex items-center justify-center bg-gray-200 rounded-full">
                    {nameShorter(user.fullname)}
                  </div>
                ) : (
                  <Image
                    src={`${config.file_base}/${user.avatar}`}
                    alt={user.fullname}
                    width={200}
                    height={200}
                    onError={() => setIsImgError(true)}
                    className="rounded-full w-full h-full object-cover object-center"
                  />
                )}
              </figure>
              <div className="text-center">
                <H4>{user.fullname}</H4>
                <Muted>{user.email}</Muted>
              </div>
            </div>
            <div className="pt-4">
              <ul>
                {navItems.map((nav) => (
                  <Tab
                    key={nav.href}
                    nav={nav}
                    selected={pathname === nav.href}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-9 bg-gray-50/70 rounded-xl p-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tab({ nav, selected }) {
  return (
    <li
      key={nav.href}
      className="rounded-md overflow-hidden relative transition-colors"
    >
      <Link
        href={nav.href}
        className={`${
          selected
            ? "text-white"
            : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
        } relative rounded-md px-4 py-3 inline-block z-10 text-sm font-medium transition-colors`}
      >
        {nav.title}
      </Link>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-primary"
        ></motion.span>
      )}
    </li>
  );
}
