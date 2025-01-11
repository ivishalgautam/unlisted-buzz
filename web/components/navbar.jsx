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
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { Button } from "./ui/button";

export const tabs = [
  { label: "Home", link: "/" },
  { label: "About", link: "#" },
  { label: "Contact Us", link: "#" },
];

export default function Navbar() {
  return (
    <header className="bg-primary-300 py-6">
      <div className="container">
        <div className="flex items-center justify-between gap-4 md:gap-12">
          <Logo />
          <nav className="hidden items-center justify-start text-sm lg:flex lg:gap-8 lg:text-base">
            <NavigationTabs tabs={tabs} />
          </nav>
          <div className="hidden sm:block">
            <CTA />
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

export function CTA() {
  return (
    <div className="flex flex-wrap justify-start gap-2">
      <Button variant="outline">Log in</Button>
      <Button>Sign up</Button>
    </div>
  );
}
