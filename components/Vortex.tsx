"use client";
import { useEffect, useState } from "react";
import { Vortex } from "./ui/vortex";

export function VortexDemoSecond() {
  const [change, setChange] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Ajoute l'écouteur d'événement de défilement lors du montage du composant
    window.addEventListener("scroll", handleScroll);

    // Nettoie l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full mx-auto rounded-md  h-full overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        rangeY={100000}
        particleCount={1000}
        baseHue={220}
        rangeSpeed={scrollY}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-black dark:text-white  text-2xl md:text-6xl font-bold text-center">
          Développeur Fullstack Next.js : Façonner l'Avenir du Web avec
          Innovation
        </h2>
        <p className="text-black dark:text-white text-sm md:text-2xl max-w-xl mt-2 text-center">
          —
        </p>
        <p className="text-black dark:text-white text-sm md:text-2xl max-w-xl mt-2 text-center">
          Ouvert aux défis freelance et opportunités de carrière enrichissantes.{" "}
        </p>
      </Vortex>
    </div>
  );
}
