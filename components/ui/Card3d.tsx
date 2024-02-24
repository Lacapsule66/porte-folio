"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function Card3d() {
  return (
    <div className="grid  container grid-cols-1 sm:grid-cols-2 gap-2">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Mon autre passion, la voile
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Découvrer mon blog sur la voile et mes aventures en mer
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/voilier.webp"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <a href="https://voilier.vercel.app/">Par ici →</a>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Sophie , photographe et réalisatrice
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Découvrer le travail de Sophie, photographe et réalisatrice
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/sophie.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="a"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <a href="https://sophie-gamma.vercel.app/index.html">Par ici →</a>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Nicolas , infirmier libéral à Argelès-sur-mer
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Découvrer le travail de Nicolas, infirmier libéral à Argelès-sur-mer
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/nicolas.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <a href="https://cabinet-infirmier-argeles.com/">Par ici →</a>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
