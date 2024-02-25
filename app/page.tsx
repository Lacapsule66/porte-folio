"use client";
import { Test } from "@/components/Test";
import { Card3d } from "@/components/ui/Card3d";
import { Test2 } from "@/components/ui/Test2";
import { TextEffect } from "@/components/ui/TextEffect";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BrowserView, MobileView } from "react-device-detect";

export default function Home() {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div>
      <TracingBeam>
        <TextEffect />
        <MobileView>
          <Test />
        </MobileView>
        <BrowserView>
          <Test2 />
        </BrowserView>
        <Card3d />
      </TracingBeam>
    </div>
  );
}
