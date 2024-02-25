/* eslint-disable react/no-unescaped-entities */
"use client";
import { cn } from "@/utils/cn";
import { motion, useAnimation, useInView } from "framer-motion";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Test2() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] container">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          // Vérifie si le titre est défini et non null, si oui, passe la prop title, sinon, ne la passe pas
          {...(item.title != null ? { title: item.title } : {})}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 10,
      rotate: 5,
    },
    animate: {
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.2,
        delay: 0.5,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: -10,
      rotate: -5,
    },
    animate: {
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.2,
        delay: 0.5,
      },
    },
  };
  const ref = useRef(null);
  const ref2 = useRef(null);
  const inView = useInView(ref, {
    margin: "0px 100px -50px 0px",
  });
  const controls = useAnimation();

  return (
    <motion.div
      initial="initial"
      animate={controls}
      whileHover={"animate"}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        ref={ref}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 w-3/4 md:w-full bg-white dark:bg-black "
      >
        <div>
          <div className="h-6 w-6  rounded-full bg-gradient-to-r from-pink-500 to-violet-500 " />{" "}
        </div>
        <p> Passionné de développement web</p>
      </motion.div>
      <motion.div
        ref={ref2}
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 md:w-3/4 ml-auto bg-white dark:bg-black "
      >
        <p>Expérience approfondie en React.js et Next.js</p>
        <div>
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white md:w-3/4 dark:bg-black  "
      >
        <div>
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />{" "}
        </div>
        <p>Mise en place de projets avec des technologies modernes</p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const stackList = [
    {
      icon: (
        <Image
          ref={ref}
          className="rounded-full"
          src="/images/stack/react.svg"
          alt="Next.js"
          height="40"
          width="40"
        />
      ),
    },
    {
      icon: (
        <Image
          ref={ref2}
          className="rounded-full bg-white"
          src="/images/stack/nextjs.svg"
          alt="Nextjs
          "
          height="40"
          width="40"
        />
      ),
    },
    {
      icon: (
        <Image
          ref={ref}
          className="rounded-full"
          src="/images/stack/js.svg"
          alt="Tailwind CSS"
          height="40"
          width="40"
        />
      ),
    },

    {
      icon: (
        <Image
          ref={ref}
          className="rounded-full"
          src="/images/stack/tailwind.svg"
          alt="Tailwind CSS"
          height="40"
          width="40"
        />
      ),
    },
    // stripe
    {
      icon: (
        <Image
          ref={ref2}
          className="rounded-full"
          src="/images/stack/stripe.svg"
          alt="Stripe"
          height="40"
          width="40"
        />
      ),
    },
    // resend
    {
      icon: (
        <Image
          ref={ref}
          className="rounded-full"
          src="/images/stack/nextauth.png"
          alt="Resend"
          height="40"
          width="40"
        />
      ),
    },
    // prisma
    {
      icon: (
        <Image
          ref={ref2}
          className="rounded-full"
          src="/images/stack/prisma.svg"
          alt="Prisma"
          height="40"
          width="40"
        />
      ),
    },
    {
      icon: (
        <Image
          ref={ref}
          className="rounded-full"
          src="/images/stack/post.svg"
          alt="Prisma"
          height="40"
          width="40"
        />
      ),
    },
    {
      icon: (
        <Image
          ref={ref2}
          className="rounded-full bg-white"
          src="/images/stack/git.svg"
          alt="Vercel"
          height="40"
          width="40"
        />
      ),
    },
  ];
  const variants = {
    initial: {
      // translate z
      rotate: 0,
    },
    animate: {
      rotate: 360,
      translateZ: 10,
      transition: {
        duration: 0.2,
        delay: 0.5,
      },
    },
  };
  const variantsSecond = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: -360,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover={"animate"}
      className=" dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-y-2 grid grid-cols- grid-cols-3 gap-2 p-2 rounded-lg"
    >
      {stackList.map((stack, i) => (
        <motion.div
          id="stack"
          key={i}
          variants={i % 2 === 0 ? variants : variantsSecond}
          ref={i % 2 === 0 ? ref : ref2}
          className="h-16 w-16 rounded-full bg-white dark:bg-black  flex items-center justify-center"
        >
          {stack.icon}
        </motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      console.log("inView");
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [inView, controls]);

  return (
    <motion.div
      initial="initial"
      animate={controls}
      ref={ref}
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
      transition: {
        delay: 0.5,
      },
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
      transition: {
        delay: 0.5,
      },
    },
  };
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      console.log("inView");
      controls.start("hover");
    } else {
      controls.start("initial");
    }
  }, [inView, controls]);

  return (
    <motion.div
      id="view"
      initial="initial"
      animate={controls}
      whileHover={"hover"}
      ref={ref}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/images/avatar.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Age : 0 - 18 ans <br /> Codeur auto-didacte
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          En cour
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/images/avatar.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Age : 28 ans <br /> Formation developpeur web
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          de
        </p>
      </motion.div>
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/images/avatar.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Age : 28 - 30 ans <br /> Developpeur web Freelance
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Developpement
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
        delay: 0.5,
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
        delay: 0.5,
      },
    },
  };

  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      console.log("inView");
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [inView, controls]);

  return (
    <motion.div
      initial="initial"
      animate={controls}
      whileHover={"animate"}
      ref={ref}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="/images/avatar.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          A quel type de proposition êtes-vous le plus sensible ?
        </p>
      </motion.div>
      <motion.div
        whileHover={"animate"}
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          Je suis ouvert à toutes propositions
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          Que cela soit en freelance ou en CDI , collaborons ensemble.
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    header: <SkeletonOne />,
    className: "md:col-span-1",
  },
  {
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Ux Ui",
    description: (
      <span className="text-sm">
        Je porte une attention particulière à l'expérience utilisateur et à
        l'interface utilisateur.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    title: "Une reconversion professionnelle",
    description: (
      <span className="text-sm">
        Afin d'allier passion et travail, j'ai décidé de me reconvertir dans le
        développement web.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },

  {
    title: "Propositions de collaboration",
    description: (
      <span className="text-sm">
        Afin de collaborer ensemble, n'hésitez pas à me contacter.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];
