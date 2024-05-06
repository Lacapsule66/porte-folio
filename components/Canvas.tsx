"use client";
import React from "react";
import { GlobeDemo } from "./Globe";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-transparent w-full gap-4 mx-auto px-8">
        <Card
          image={
            <img
              className="w-full h-full object-cover rounded-md"
              src="/images/profil.jpg"
              alt=""
            />
          }
        />
        <Card
          video={
            <video
              className="w-full h-full object-cover"
              loop
              autoPlay
              muted
              src="/video/voile.mp4"
            />
          }
        />
        <Card globe={<GlobeDemo />} />
      </div>
    </>
  );
}

const Card = ({
  image,
  video,
  globe,
}: {
  image?: React.ReactNode;
  video?: React.ReactNode;
  globe?: React.ReactNode;
}) => {
  return (
    <div
      className={`border border-black/[0.2] flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 h-[30rem] relative`}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <div className="w-full h-full">
        {image && (
          <div className="w-full h-full relative">
            <div className="  bg-white  dark:bg-black  dark:text-white top-14 -rotate-12 rounded-lg p-2 absolute z-10">
              <h2>Développeur web fullStack</h2>
            </div>
            {image}
          </div>
        )}
        {video && (
          <div className="w-full h-full">
            {" "}
            <div className=" bg-white  dark:bg-black  dark:text-white  top-14 rotate-12 rounded-lg p-2 absolute z-10">
              <h2>Féru de navigation a la voile</h2>
            </div>
            <div className=" bg-white  dark:bg-black  dark:text-white  top-28 rotate-6 rounded-lg p-2 absolute z-10">
              <h2>Il m'arrive souvent de codé depuis mon voilier</h2>
            </div>
            {video}
          </div>
        )}
        {globe && (
          <div className="w-full h-full">
            {" "}
            <div className="  bg-black text-white dark:bg-white  dark:text-black top-14 -rotate-12 rounded-lg p-2 absolute z-10">
              <h2>Passionné de code !</h2>
            </div>
            {globe}
          </div>
        )}
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
