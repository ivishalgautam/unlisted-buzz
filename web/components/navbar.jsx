"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import NavigationTabs from "./navigation-tabs";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { buttonVariants } from "./ui/button";
import { useContext } from "react";
import { MainContext } from "@/store/context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import config from "@/config";
import { nameShorter } from "@/lib/name-shorter";

export const tabs = [
  { label: "Home", link: "/" },
  { label: "DRHP-Filed", link: "/drhp-filed" },
  { label: "About", link: "#" },
  { label: "Contact Us", link: "/contact-us" },
];

export const logout = () => {
  if (typeof window !== "undefined") {
    window.location.href = "/login";
    localStorage.clear();
  }
  redirect("/login");
};

export default function Navbar() {
  const { user, isUserLoading, setUser } = useContext(MainContext);
  return (
    <header className="bg-primary-300 py-6 bg-white shadow-sm border-b">
      <div className="container">
        <div className="flex items-center justify-between gap-4 md:gap-12">
          <Logo />
          <nav className="hidden items-center justify-start text-sm lg:flex lg:gap-8 lg:text-base">
            <NavigationTabs tabs={tabs} />
          </nav>
          <div className="hidden sm:block">
            <CTA {...{ user, isUserLoading, setUser }} />
          </div>
          <div className="block lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className={"text-start"}>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation menu
          </SheetDescription>
          <div className="!mt-8 space-y-4">
            <nav>
              <ul>
                {tabs.map((list, key) => {
                  const selected =
                    pathname === (list.link === "Home" ? "/" : list.link);
                  return (
                    <li
                      key={key}
                      className={cn(
                        `relative rounded-md p-3 text-sm font-medium text-gray-500 transition-colors dark:hover:text-gray-100`,
                        {
                          "text-white": selected,
                          "hover:text-gray-900": !selected,
                        }
                      )}
                    >
                      <Link href={list.link} className="group-hover:text-white">
                        <span className="relative z-10">{list.label}</span>
                      </Link>
                      {selected && (
                        <motion.span
                          layoutId="tab"
                          transition={{ type: "spring", duration: 0.4 }}
                          className="absolute inset-0 z-0 rounded-md bg-secondary"
                        ></motion.span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="block sm:hidden">
              <CTA />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export function CTA({ user, setUser, isUserLoading }) {
  const router = useRouter();
  if (isUserLoading) return;
  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={`${config.file_base}/${user.avatar}`} />
          <AvatarFallback className="uppercase">
            {nameShorter(user?.fullname)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/profile"}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            localStorage.clear();
            router.replace("/");
            setUser(null);
          }}
          className="cursor-pointer"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <div className="flex flex-wrap justify-start gap-2">
      <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>
        Log in
      </Link>
      <Link href={"signup"} className={buttonVariants({})}>
        Sign up
      </Link>
    </div>
  );
}
