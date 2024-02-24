import { Separator } from "@/components/ui/separator";
// import icone facebook icones-react
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const socials = [
    {
      name: "GitHub",
      link: "",
      icone: <SocialIcon url="github.com" />,
    },
    {
      name: "Twitter",
      link: "",
      icone: <SocialIcon url="twitter.com" />,
    },
    {
      name: "LinkedIn",
      link: "",
      icone: <SocialIcon url="linkedin.com" />,
    },
    {
      name: "Facebook",
      link: "",
      icone: <SocialIcon url="facebook.com" />,
    },
    {
      name: "Instagram",
      link: "",
      icone: <SocialIcon url="instagram.com" />,
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
