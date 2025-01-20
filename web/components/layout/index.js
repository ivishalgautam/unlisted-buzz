"use client";
import React, { lazy, Suspense, useContext } from "react";
const Navbar = lazy(() => import("../../components/navbar"));
const Footer = lazy(() => import("../footer"));
import SharesMarquee from "../shares-marquee";
import { useParams, usePathname, useRouter } from "next/navigation";
import { MainContext } from "@/store/context";
import { useEffect } from "react";
import { ALLROUTES } from "@/data";

export default function Layout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { slug } = useParams();
  const { user, setUser, isUserLoading } = useContext(MainContext);

  useEffect(() => {
    if (pathname === "/login" || pathname === "/signup") {
      return;
    }

    const storedUser = localStorage.getItem("user");
    const currentUser = JSON.parse(storedUser);
    // Find the current route in the AllRoutes array
    const currentRoute = ALLROUTES?.find(
      (route) => route.link.replace("[slug]", slug) === pathname
    );
    // If the current route is not found in the array or the user's role is not allowed for this route
    if (
      currentRoute?.roles?.length &&
      !currentRoute?.roles?.includes(currentUser?.role)
    ) {
      localStorage.clear();
      router.replace("/");
      setUser(null);
    }
  }, [pathname, user, setUser, isUserLoading, slug, router]);

  const getContent = () => {
    // Array of all the paths that don't need the layout
    if (["/login", "/signup", "/unauthorized"].includes(pathname)) {
      return children;
    }

    return (
      <>
        <Suspense fallback={<div>loading...</div>}>
          <Navbar />
        </Suspense>
        {/* <SharesMarquee /> */}
        <div className="min-h-[calc(100vh-135px)]">{children}</div>
        <Suspense fallback={<div>loading...</div>}>
          <Footer />
        </Suspense>
      </>
    );
  };

  return <div className="bg-gray-50 min-h-screen">{getContent()}</div>;
}
