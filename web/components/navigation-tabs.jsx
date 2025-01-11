import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Tab = ({ tab, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(tab)}
      className={`${
        selected
          ? "text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <Link href={tab.link}>
        <span className="relative z-10">{tab.label}</span>
      </Link>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-primary"
        ></motion.span>
      )}
    </button>
  );
};

const NavigationTabs = ({ tabs }) => {
  const [selected, setSelected] = useState(tabs[0]);
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab, index) => (
        <Tab
          tab={tab}
          selected={pathname === (tab.link === "Home" ? "/" : tab.link)}
          setSelected={setSelected}
          key={tab.label}
        />
      ))}
    </div>
  );
};

export default NavigationTabs;
