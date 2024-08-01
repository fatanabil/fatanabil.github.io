"use client";

import Image from "next/image";
import Logo from "@/assets/img/logo.png";

const { useEffect } = require("react");

const Navbar = ({ activeSection }) => {
  const sections = ["home", "about-me", "skills", "projects"];

  useEffect(() => {
    const nav_slider_span = document.getElementById("nav-slider");
    const nav_a = document.querySelectorAll("nav div a");
    let index_val = sections.indexOf(activeSection);
    let left_position;

    for (let i = 0; i <= index_val; i++) {
      const el = nav_a[i];
      const sliderLeft = getLeftPostition(index_val);
      nav_slider_span.style.width = el.clientWidth + "px";
      nav_slider_span.style.left = sliderLeft + "px";
      left_position = 0;
    }

    function getLeftPostition(index_val) {
      let left = 0;
      for (let i = 0; i < index_val; i++) {
        const element = nav_a[i];
        left += element.clientWidth;
      }
      return left;
    }
  }, [activeSection]);

  return (
    <nav className="fixed top-0 w-full bg-transparent z-50 backdrop-blur-sm flex items-center px-48">
      <a href="/#home" className="min-w-28">
        <Image src={Logo} alt="logo" className="w-8 h-8" />
      </a>
      <div className="flex max-w-fit relative mx-auto text-dark-cerulean self-center">
        <a
          href="/#home"
          className={`px-12 py-3 shadow-dark-cerulean text-shadow transition-all duration-150 ${
            activeSection === "home" && "active"
          }`}
        >
          Home
        </a>
        <a
          href="/#about-me"
          className={`px-12 py-3 shadow-dark-cerulean text-shadow transition-all duration-150 ${
            activeSection === "about-me" && "active"
          }`}
        >
          About Me
        </a>
        <a
          href="/#skills"
          className={`px-12 py-3 shadow-dark-cerulean text-shadow transition-all duration-150 ${
            activeSection === "skills" && "active"
          }`}
        >
          Skills
        </a>
        <a
          href="/#projects"
          className={`px-12 py-3 shadow-dark-cerulean text-shadow transition-all duration-150 ${
            activeSection === "projects" && "active"
          }`}
        >
          Projects
        </a>
        <span
          id="nav-slider"
          className="absolute h-full transition-all duration-500 pointer-events-none"
        >
          <i className="absolute w-[calc(100%-56px)] h-[2px] bottom-1 bg-ocean-green rounded-full left-1/2 -translate-x-1/2"></i>
        </span>
      </div>
      <a href="/#contacts" className="min-w-28 flex justify-end">
        <button className="bg-gradient-to-tr from-dark-cerulean to-ocean-green text-white w-fit px-4 py-1 text-sm rounded-md active:scale-95 transition-all duration-150 flex gap-4 items-center group overflow-y-hidden">
          Contacts
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
