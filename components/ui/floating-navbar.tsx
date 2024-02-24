"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "../ButtonTheme";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link?: string; // Optional link for non-button items
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const previousScrollY = useRef(0); // Track previous scroll position
  const visibilityTimeout = useRef(null); // Store visibility timeout

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY - previousScrollY.current;

    // Check if scrolling up or down
    if (direction > 0) {
      // Scrolling down, hide the navbar
      setVisible(false);
    } else {
      // Scrolling up or at the top, show the navbar
      setVisible(true);
    }

    previousScrollY.current = currentScrollY;
  };

  // Reset visibility timeout on scroll
  useEffect(() => {
    const handleResize = () => {
      if (visibilityTimeout.current) {
        clearTimeout(visibilityTimeout.current);
      }
      setVisible(true); // Show navbar on resize
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      visibilityTimeout.current = setTimeout(() => {
        setVisible(true); // Show navbar after 1 second of inactivity
      }, 1000);
    } else if (visibilityTimeout.current) {
      clearTimeout(visibilityTimeout.current); // Clear timeout when visible
    }
  }, [visible]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex px-6 max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-white/[0.2] rounded-full  bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.2,
              delay: index * 0.05,
            }}
            className="flex items-center space-2"
          >
            {item.name === "button" ? (
              <ThemeToggle />
            ) : (
              <Link href={item.link} className="flex gap-2">
                {item.icon}
                <span className="text-sm font-semibold text-neutral-500 dark:text-white">
                  {item.name}
                </span>
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
