"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutmeContent from "@/components/modules/aboutme/AboutmeContent";
import Typewriter from "@/components/modules/home/Typewriter";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "about-me", ref: aboutMeRef },
      { id: "skills", ref: skillsRef },
      { id: "projects", ref: projectsRef },
    ];

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, null, `#${entry.target.id}`);
          }
        }),
      { root: null, rootMargin: "0px", threshold: 0.9 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />

      <section
        ref={homeRef}
        id="home"
        className="min-h-screen flex flex-col justify-center"
      >
        <div className="max-w-4xl w-full mx-auto min-h-[120px]">
          <Typewriter />
        </div>
      </section>

      <section
        ref={aboutMeRef}
        id="about-me"
        className="min-h-screen bg-dark-cerulean-100"
      >
        <AboutmeContent />
      </section>

      <section ref={skillsRef} id="skills" className="min-h-screen">
        <h1>On Development</h1>
      </section>

      <section
        ref={projectsRef}
        id="projects"
        className=" min-h-screen bg-dark-cerulean-100"
      >
        <h1>On Development</h1>
      </section>
      <Footer />
    </>
  );
}
