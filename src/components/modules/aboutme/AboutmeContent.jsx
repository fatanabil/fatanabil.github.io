import Arrow from "@/assets/icons/Arrow";
import Image from "next/image";
import SelfPict from "@/assets/img/self.png";

export default function AboutmeContent() {
  return (
    <div className="flex mx-auto min-h-screen max-w-6xl">
      <div className="relative min-h-full flex flex-col justify-end">
        <div className="bg-gradient-to-b from-key-lime to-ocean-green w-[500px] aspect-square rounded-full absolute left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2"></div>
        <Image
          src={SelfPict}
          alt="self-protrait"
          className="relative aspect-auto max-w-[500px]"
        />
      </div>
      <div className="relative z-10 self-center flex flex-col">
        <h1 className="text-ocean-green text-4xl font-semibold relative after:absolute after:w-2/3 after:h-1 after:bg-ocean-green after:left-0 after:-bottom-2 w-fit">
          About Me
        </h1>
        <div className="flex flex-col gap-4 mt-14 font-semibold text-dark-cerulean text-lg leading-relaxed">
          <p>
            Hi, I&apos;m Fata Nabil Fikri, a Frontend Developer. Currently,
            I&apos;m focused on Frontend Web Development using ReactJS as UI
            development library and Tailwindcss as a the CSS framework.
          </p>
          <p className="mb-16">
            Besides that, I am also go deep into another fields such as Backend
            Development because my goal is to become a Full-stack Developer.
            However, for now, I am primarily known as a Frontend Developer.
          </p>
        </div>
        <a href="/#contacts" className="self-end">
          <button className="bg-gradient-to-tr from-dark-cerulean to-ocean-green text-white w-fit px-6 py-2 rounded-md text-lg active:scale-95 transition-all duration-150 flex gap-4 items-center group overflow-y-hidden">
            <span>Contacts</span>
            <i>
              <Arrow className="size-5 stroke-[2px] group-hover:translate-y-1 transition-all duration-300" />
            </i>
          </button>
        </a>
      </div>
    </div>
  );
}
