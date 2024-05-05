import { Separator } from "@/components/ui/separator";
// import icone facebook icones-react
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const socials = [
    {
      name: "LinkedIn",
      link: "",
      icone: (
        <SocialIcon url="https://www.linkedin.com/in/romain-marty-a93757248/" />
      ),
    },
    {
      name: "Gmail",
      link: "Email",
      icone: <SocialIcon url="gmail.com" />,
      network: "Email",
    },

    {
      name: "Instagram",
      link: "",
      icone: <SocialIcon url="https://www.instagram.com/marty_romain66/" />,
    },
  ];
  return (
    <>
      <Separator className="mt-6" />
      <footer className="flex flex-col items-center justify-center w-full h-44 border-t border-neutral-200 dark:border-neutral-700">
        <div className="grid  grid-cols-5 gap-4">
          {socials.map((social, index) => (
            <>
              <div>{social.icone}</div>
            </>
          ))}
        </div>
      </footer>
    </>
  );
}
