"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import ExperienceCard from "@/components/ExperienceCard";
import ProfileAvatar from "@/components/ProfileAvatar";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SkillGroup from "@/components/SkillGroup";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { productThinking, skillGroups } from "@/data/skills";

const SplashCursor = dynamic(() => import("@/components/SplashCursor"), {
  ssr: false,
});

const navigation = [
  { id: "about", label: "About" },
  { id: "product-thinking", label: "Product Thinking" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: 0.15 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <SplashCursor />
      <div className="relative min-h-screen overflow-x-clip text-slate-100">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-12rem] top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-[-10rem] top-[32rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-screen-xl flex-col px-6 py-10 md:px-12 md:py-16 lg:flex-row lg:px-20 lg:py-24">
          <header className="lg:sticky lg:top-10 lg:flex lg:max-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-5rem)] lg:w-[38%] lg:max-w-md lg:flex-col lg:justify-between lg:self-start lg:overflow-y-auto lg:pr-12">
            <div>
              <ProfileAvatar />

              <div className="text-center lg:text-left">
                <h1 className="bg-gradient-to-r from-white via-cyan-100 to-slate-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                  Oguz Kaan Dere
                </h1>
                <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 lg:mx-0" />

                <h2 className="mt-7 text-lg font-semibold leading-8 text-slate-100 sm:text-xl">
                  AI-native Full-Stack Developer · Product-minded Builder ·
                  Biomedical Engineering Background
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 lg:max-w-sm">
                  I build practical web products that combine clean frontend
                  engineering, document workflows, AI-assisted analysis, and
                  domain-specific decision systems.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <a
                    href="#projects"
                    className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:from-cyan-300 hover:to-blue-400"
                  >
                    View Projects
                  </a>
                  <a
                    href="/Oguz_Kaan_Dere_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                  >
                    Download CV
                  </a>
                  <a
                    href="https://github.com/ogzkaann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/oguz-kaan-dere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <nav className="hidden lg:block" aria-label="In-page navigation">
                <ul className="mt-16 space-y-2">
                  {navigation.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="group flex w-max items-center py-3 text-sm transition"
                        >
                          <span
                            className={`mr-4 h-px transition-all duration-300 ${
                              isActive
                                ? "w-16 bg-cyan-300"
                                : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-cyan-300"
                            }`}
                          />
                          <span
                            className={`text-xs font-bold uppercase tracking-[0.22em] transition ${
                              isActive
                                ? "text-white"
                                : "text-slate-500 group-hover:text-slate-200"
                            }`}
                          >
                            {item.label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <p className="mt-10 hidden max-w-sm text-sm leading-6 text-slate-500 lg:block">
              Currently in Germany, improving German and building targeted
              AI/product portfolio projects while looking for qualified
              software and product roles.
            </p>
          </header>

          <main className="mt-16 flex-1 space-y-24 lg:mt-0 lg:w-[62%] lg:pl-8">
            <section id="about" className="scroll-mt-16" aria-label="About">
              <SectionHeading title="About" />
              <div className="space-y-5 text-base leading-8 text-slate-300">
                <p>
                  I am a software developer with a Biomedical Engineering
                  background, enterprise web experience, and hands-on hospital
                  software exposure. My professional work has included
                  Angular/TypeScript frontend systems, Java/JavaScript
                  full-stack tasks, database-backed features, and production bug
                  fixing.
                </p>
                <p>
                  Recently, my focus has shifted toward AI-assisted product
                  development: local-first apps, RAG, OCR, document workflows,
                  decision-support interfaces, and MVPs that can be explained
                  clearly instead of just demoed visually.
                </p>
                <p>
                  During my transition to Germany, I have been improving my
                  German, aligning with the local software job market, and
                  building focused portfolio products around practical problems.
                  I still like games, systems, and tools with a bit of
                  personality, but the center of gravity is useful software.
                </p>
              </div>
            </section>

            <section
              id="product-thinking"
              className="scroll-mt-16"
              aria-label="Product thinking"
            >
              <SectionHeading title="Product Thinking" />
              <div className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 backdrop-blur">
                <ul className="space-y-4">
                  {productThinking.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section
              id="experience"
              className="scroll-mt-16"
              aria-label="Work experience"
            >
              <SectionHeading title="Experience" />
              <div className="space-y-6">
                {experiences.map((experience) => (
                  <ExperienceCard
                    key={`${experience.company}-${experience.date}`}
                    experience={experience}
                  />
                ))}
              </div>
            </section>

            <section
              id="projects"
              className="scroll-mt-16"
              aria-label="Selected projects"
            >
              <SectionHeading title="Projects" />
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </section>

            <section id="skills" className="scroll-mt-16" aria-label="Skills">
              <SectionHeading title="Skills" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <SkillGroup key={group.title} group={group} />
                ))}
              </div>
            </section>

            <footer className="border-t border-white/10 pb-10 pt-8 text-sm text-slate-500">
              <p>© 2026 Oguz Kaan Dere. Built with Next.js, TypeScript, and Tailwind.</p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
