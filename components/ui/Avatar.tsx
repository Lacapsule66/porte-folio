"use client";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Romain Marty",
    designation: "Toujour en quête de savoir !",
    image: "/images/matrix.gif",
  },
  {
    id: 1,
    name: "Romain Marty",
    designation: "Passionné de code ! ",

    image: "/images/profil.jpg",
  },
  {
    id: 1,
    name: "Romain Marty",
    designation: "Navigateur féru de voile ! ",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
];

export function Avatar({
  videoOrPhoto,
  length,
}: {
  videoOrPhoto: boolean;
  length: number;
}) {
  return (
    <div className="flex flex-row items-center  justify-center mb-10">
      <AnimatedTooltip
        length={length}
        videoOrPhoto={videoOrPhoto}
        items={people}
      />
    </div>
  );
}
