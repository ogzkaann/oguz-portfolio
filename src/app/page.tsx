'use client';

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.7 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <Head>
                <title>Oguz Kaan Dere | Full Stack Developer, Software Developer, React Developer</title>
                <meta
                    name="description"
                    content="Oguz Kaan Dere is a Full Stack Developer specializing in modern web technologies like JavaScript, React, Node.js, and more. Explore his projects, experience, and get in touch for freelance or full-time opportunities."
                />
                <meta
                    name="keywords"
                    content="Full Stack Developer, Software Developer, React Developer, JavaScript, TypeScript, Angular, Vue.js, Node.js, Freelance Developer, Oguz Kaan Dere"
                />
                <meta name="author" content="Oguz Kaan Dere"/>
                <link rel="canonical" href="https://oguz-portfolio.vercel.app/"/>

                {/* Open Graph and Twitter meta tags */}
                <meta property="og:title" content="Oguz Kaan Dere | Full Stack Developer, Software Developer, React Developer" />
                <meta property="og:description"
                      content="Oguz Kaan Dere is a Full Stack Developer specializing in modern web technologies. Explore his projects and get in touch!"/>
                <meta property="og:url" content="https://oguz-portfolio.vercel.app/"/>
                <meta property="og:image" content="/og-image.png"/>
                <meta property="og:type" content="website"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:title" content="Oguz Kaan Dere | Full Stack Developer, Software Developer, React Developer" />
                <meta property="twitter:description"
                      content="Oguz Kaan Dere is a Full Stack Developer specializing in modern web technologies. Explore his projects and get in touch!"/>
                <meta property="twitter:image" content="/og-image.png"/>
            </Head>

            {/* Main container adjusted for responsiveness */}
            <div className="flex flex-col lg:flex-row mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24">

                {/* Left Sidebar - Shown first on mobile, sticky on desktop */}
                <header className="lg:sticky lg:top-24 flex flex-col justify-between lg:h-full lg:mr-8">
                    {/* Personal Info */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Oguz Kaan Dere
                        </h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-gray-700 dark:text-gray-300 sm:text-l">
                            Mid-Level Full Stack Developer
                        </h2>
                        <p className="mt-4 lg:max-w-xs leading-normal text-gray-600 dark:text-gray-400">
                            I create scalable, high-performance applications using modern technologies like JavaScript, React, Node.js, and more.
                        </p>

                        {/* Navigation - Hidden on small screens */}
                        <nav className="nav hidden lg:block" aria-label="In-page jump links">
                            <ul className="mt-16 space-y-2 w-max">
                                {['about', 'experiences', 'projects'].map((section) => (
                                    <li key={section}>
                                        <a
                                            className={`group flex items-center py-3 ${activeSection === section ? 'text-white' : 'text-gray-500 dark:text-gray-400'
                                            }`}
                                            href={`#${section}`}
                                        >
                                            <span
                                                className={`nav-indicator mr-4 h-px w-8 transition-all ${activeSection === section
                                                    ? 'w-16 bg-gray-900 dark:bg-white'
                                                    : 'bg-gray-500 group-hover:w-16 group-hover:bg-gray-900 dark:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-900 dark:group-focus-visible:bg-gray-800 motion-reduce:transition-none'
                                                }`}
                                            ></span>
                                            <span
                                                className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === section ? 'text-white' : 'text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white group-focus-visible:text-gray-900 dark:group-focus-visible:text-white'
                                                }`}
                                            >
                                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Social Media Links */}
                    <div className="text-center mt-12 lg:mt-36">
                        <a
                            href="/Oguz_Kaan_Dere_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-8 inline-block rounded bg-gray-900 px-6 py-2 text-sm font-semibold text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
                        >
                            Download CV
                        </a>
                        <ul className="flex justify-center space-x-4">
                            <li>
                                <a href="https://github.com/ogzkaann" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Image src="/github.svg" alt="GitHub" width={24} height={24}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/oguz-kaan-dere" target="_blank"
                                   rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24}/>
                                </a>
                            </li>
                            {/* Add more social media links here */}
                        </ul>
                    </div>
                </header>

                {/* Right Main Content - Flex column layout for mobile, row layout for larger screens */}
                <main className="flex-1 overflow-y-auto p-6 lg:ml-28 lg:overflow-y-visible">
                    {/* About Section */}
                    <section
                        id="about"
                        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                        aria-label="About me"
                    >
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About Me</h3>
                            <div className="max-w-2xl text-base text-gray-600 dark:text-gray-400 space-y-6">
                                <p>
                                    Back in high school, I decided that creating a Text-Based Adventure Game was a great
                                    way
                                    to dive headfirst into the chaos of coding. Fast forward to today, and I’ve found
                                    myself
                                    wading through both vast corporate mazes with sprawling, tangled codebases and
                                    intimate
                                    projects where I’ve built everything from scratch—one line at a time.
                                </p>
                                <p>
                                    These days, I’m neck-deep in developing a full-stack web app, where I get to flex
                                    both
                                    my problem-solving skills and my creative muscles. I thrive on tackling complex
                                    problems
                                    and crafting something meaningful from the chaos. Sure, there are moments when I
                                    feel
                                    like I’m hopelessly inadequate, but my ability to quickly dust myself off, identify
                                    my
                                    gaps, and get back in the game is my superpower.
                                </p>

                                <p>
                                    When I’m not buried in code, you’ll likely find me diving into cultural, historical,
                                    philosophical, and sociological texts—because, let’s face it, there’s just too much
                                    out
                                    there to learn. And when my brain needs a break from all that enlightenment, I turn
                                    to
                                    my trusty 3D printer, pushing its limits with my latest designs.
                                </p>

                                <p>
                                    On a good day, I’m your go-to sarcastic and fun-loving individual. But I try to
                                    remember
                                    that life throws curveballs at all of us, so I make an effort to be kind—always.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section
                        id="experiences"
                        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                        aria-label="Selected projects"
                    >
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h3>
                            <div className="mt-8 flex flex-col space-y-8">
                                <ExperienceCard
                                    title="Full Stack Developer"
                                    company="Ekinoks Software"
                                    date="Dec 2022 - Present"
                                    responsibilities={[
                                        "Led development of Angular components, reducing code redundancy by 40% and improving loading speed by 30%.",
                                        "Achieved 90% code coverage by writing comprehensive unit tests, boosting bug detection efficiency by 50%.",
                                        "Developed a Contract Manager app using Vue.js, Node.js, and PostgreSQL, enhancing backend efficiency by 40% and reducing response times."
                                    ]}
                                    technologies={["Angular", "C#", "Jasmine", "Vue.js", "Typescript", "HTML", "Node.js", "Fastify", "PostgreSQL", "Tailwind CSS"]}
                                />
                                <ExperienceCard
                                    title="Full Stack Developer"
                                    company="Fonet Software"
                                    date="May 2021 - Nov 2022"
                                    responsibilities={[
                                        "Optimized database transactions, resulting in a 20% faster data retrieval for critical hospital applications.",
                                        "Created reusable modules, cutting future development time by 20% and improving platform consistency.",
                                        "Improved application performance by 15%, reducing load times and increasing user satisfaction."
                                    ]}
                                    technologies={["Java", "ExtJS", "Javascript", "HTML", "Oracle Database"]}
                                />
                                <ExperienceCard
                                    title="Game Developer"
                                    company="ATOM - METU"
                                    date="Jul 2019 - Aug 2020"
                                    responsibilities={[
                                        "Increased game performance by 25% and reduced memory usage by 40% through advanced optimization techniques.",
                                        "Enhanced user engagement by 15% and reduced loading times by 30%, driving higher retention rates.",
                                        "Managed end-to-end development and design for 3 mobile games, achieving a 95% cross-device compatibility."
                                    ]}
                                    technologies={["Unity 3D", "Unity 2D", "C#", "Blender", "Adobe Photoshop", "Git"]}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section
                        id="projects"
                        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                        aria-label="Selected projects"
                    >
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Projects</h3>
                            <div
                                className="mt-8 flex overflow-x-auto space-x-4 py-4 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 flex-nowrap">
                                <ProjectCard
                                    title="Job Application Tracker"
                                    description="Effortlessly track and manage all your job applications in one powerful and intuitive platform."
                                    demoLink="#"
                                    frontendLink="https://github.com/ogzkaann/job-application-tracker-frontend"
                                    backendLink="https://github.com/ogzkaann/job-application-tracker-backend"
                                />
                                <ProjectCard
                                    title="Custom iBeacon Notification App"
                                    description="Developed a custom Android application using Java and Android Studio that detects nearby iBeacons and sends personalized notifications based on the detected beacon. The app was designed for a specific client and cannot be shared publicly due to confidentiality agreements."
                                    demoLink="#"
                                    frontendLink="#"
                                    backendLink="#"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="mt-12 max-w-md pb-16 text-sm text-gray-500 sm:pb-0 lg:w-full">
                        <p className="text-center dark:text-gray-400">&copy; 2024 Oguz Kaan Dere. All rights
                            reserved.</p>
                    </footer>
                </main>
            </div>
        </>
    );
}
