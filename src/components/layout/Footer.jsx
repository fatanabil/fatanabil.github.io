import Image from "next/image";
import Logo from "@/assets/img/logo-white.png";
import GmailIcon from "@/assets/icons/GmailIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import GithubIcon from "@/assets/icons/GithubIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-ocean-green text-white">
      <div className="px-48 pt-24 pb-16">
        <Image src={Logo} alt="" className="w-12 h-12 aspect-square mb-12" />
        <p className="my-4 text-lg font-semibold w-1/2">
          If you want to know my contact information or check my CV, please see
          below.
        </p>
        <div className="flex">
          <div className="basis-2/3">
            <ul className="mb-8 text-base font-semibold flex flex-col gap-2">
              <li className="flex gap-3 items-center">
                <i>
                  <GmailIcon />
                </i>
                <a
                  href="mailto:fatanabil88@gmail.com"
                  className="hover:underline hover:cursor-pointer"
                  target="_blank"
                >
                  fatanabil88@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <i>
                  <LinkedinIcon />
                </i>
                <a
                  href="https://www.linkedin.com/in/fata-nabil-fikri/"
                  className="hover:underline hover:cursor-pointer"
                  target="_blank"
                >
                  in/fata-nabil-fikri
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <i>
                  <GithubIcon />
                </i>
                <a
                  href="https://github.com/fatanabil"
                  className="hover:underline hover:cursor-pointer"
                  target="_blank"
                >
                  fatanabil
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <i>
                  <InstagramIcon />
                </i>
                <a
                  href="https://www.instagram.com/fatanabil_/"
                  className="hover:underline hover:cursor-pointer"
                  target="_blank"
                >
                  @fatanabil_
                </a>
              </li>
            </ul>
            <button className="border-2 border-white rounded-md px-8 py-2 hover:bg-white transition-all duration-150 ease-in-out hover:text-ocean-green active:scale-90 font-semibold">
              Check My CV {"->"}
            </button>
          </div>
          <div className="basis-1/3 text-lg font-semibold flex flex-col justify-between">
            <a
              href="#home"
              className="relative w-fit after:absolute after:h-[2px] after:w-full after:-bottom-[2px] after:bg-white after:left-0 after:scale-y-100 after:scale-x-0 after:hover:scale-x-125 after:transition-all after:duration-300 after:ease-in-out after:origin-left"
            >
              Home
            </a>
            <a
              href="#about-me"
              className="relative w-fit after:absolute after:h-[2px] after:w-full after:-bottom-[2px] after:bg-white after:left-0 after:scale-y-100 after:scale-x-0 after:hover:scale-x-125 after:transition-all after:duration-300 after:ease-in-out after:origin-left"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="relative w-fit after:absolute after:h-[2px] after:w-full after:-bottom-[2px] after:bg-white after:left-0 after:scale-y-100 after:scale-x-0 after:hover:scale-x-125 after:transition-all after:duration-300 after:ease-in-out after:origin-left"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="relative w-fit after:absolute after:h-[2px] after:w-full after:-bottom-[2px] after:bg-white after:left-0 after:scale-y-100 after:scale-x-0 after:hover:scale-x-125 after:transition-all after:duration-300 after:ease-in-out after:origin-left"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-dark-cerulean py-3 grid place-content-center font-semibold text-sm text-dark-cerulean-400">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
