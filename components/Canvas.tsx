"use client";
import { gsap } from "gsap/gsap-core";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Avatar } from "./ui/Avatar";

export function CanvasRevealEffectDemo() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#card", {
      opacity: 1,
      scrollTrigger: {
        trigger: "#card",

        start: "top 50%+=100px", // when the top of the trigger hits the top of the viewport
        end: "bottom 50%+=100px", // end after scrolling 500px beyond the start
      },
    });
  });
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-transparent w-full gap-4 mx-auto px-8">
        <Card
          profil={
            <div
              id="card"
              className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
            >
              <Avatar length={1} videoOrPhoto={true} />
            </div>
          }
          title="Romain Marty 30 développeur fullstack."
          icon={<AceternityIcon />}
        />
        <Card
          profil={
            <div
              id="card"
              className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
            >
              <Avatar length={2} videoOrPhoto={false} />
            </div>
          }
          title="Fou de navigation a la voile."
          icon={<AceternityIcon />}
        >
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          profil={
            <div
              id="card"
              className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
            >
              <Avatar length={0} videoOrPhoto={true} />
            </div>
          }
          title="Passionné par le code !"
          icon={<AceternityIcon />}
        />
      </div>
    </>
  );
}

const Card = ({
  profil,
  description,
  title,
  icon,
  children,
}: {
  profil?: React.ReactNode;
  description?: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [display, setDisplay] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    console.log("+" + inView);
    if (inView == true) {
      setHovered(true);
      setDisplay(true);
    }
  }, [entry, inView]);
  useEffect(() => {
    if (display === true) {
      setOpacity(1);
    }
  }, [display]);

  return (
    <div
      ref={ref}
      className={`border opacity-${opacity}   border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative`}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      {/* <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence> */}

      <div className="relative z-20">
        <div className="text-center  group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>

        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        {profil}

        <p>{description} </p>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};