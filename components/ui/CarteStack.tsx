"use client";
import { cn } from "@/utils/cn";
import { CardStack } from "../ui/card-stack";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Romain Marty",
    designation: "Web developer fullstack",
    content: (
      <p>
        Merci d'avoir pris le temps d'analyser mon travail, envoyez moi un email
        pour rentré en contact avec moi{" "}
        <Highlight>martyromain.dev@gmail.com</Highlight> A très vite ! 🤝
      </p>
    ),
  },
];
