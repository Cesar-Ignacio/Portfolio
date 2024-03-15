import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next';
type Tab = {
  name: string;
  id: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {




  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  const [t] = useTranslation("global")

  return (
    <>
      <div className={cn("flex flex-row invisible md:visible ", containerClassName)}>
        {propTabs.map((tab, idx) => (
          <a href={`#${tab.id}`} key={tab.name} onClick={() => { moveSelectedTabToTop(idx); }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-1 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.id === tab.id && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 dark:bg-fountain-blue-600 bg-silver-300 rounded-full ",
                  activeTabClassName,

                )}
              />
            )}

            <span className="relative block dark:text-silver-100 ">
              {t(`header.${tab.name}`)}
            </span>
          </a>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.id}
        hovering={hovering}
        className={cn("mt-32 ", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {




  const isActive = (tab: Tab) => {
    return tab.id === tabs[0].id;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.id}
          layoutId={tab.id}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
