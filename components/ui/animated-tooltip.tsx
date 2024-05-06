"use client";

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const AnimatedTooltip = ({
  length,
  videoOrPhoto,
  items,
}: {
  length: number;
  videoOrPhoto: boolean;
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 25 };
  const x = useMotionValue(0); // going to set this value on mouse move

  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  useEffect(() => {
    console.log(x);
  }, [x]);
  return (
    <>
      <div
        className="-mr-4  relative "
        key={items[length]?.name}
        onMouseEnter={() => setHoveredIndex(items[length]?.id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {videoOrPhoto ? (
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={items[length]?.image}
            alt={items[length]?.name}
            className=" !m-0 !p-0   !h-full border-2  border-white   "
          />
        ) : (
          <video
            onMouseMove={handleMouseMove}
            loop
            muted
            autoPlay
            className="object-cover !m-0 !p-0 object-top rounded-full h-44 w-44 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
            src="video/voile.mp4"
          ></video>
        )}
      </div>
    </>
  );
};
