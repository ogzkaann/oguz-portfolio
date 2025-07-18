'use client';

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
const ExperienceCard = dynamic(() => import('@/components/ExperienceCard'), { ssr: false });
const ProjectCard = dynamic(() => import('@/components/ProjectCard'), { ssr: false });
const SplashCursor = dynamic(() => import('@/components/SplashCursor'), { ssr: false });

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
            <SplashCursor />
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
            </Head>            {/* Main container adjusted for responsiveness */}
            <div className="flex flex-col lg:flex-row mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
                </div>                {/* Left Sidebar - Shown first on mobile, sticky on desktop */}
                <header className="lg:sticky lg:top-24 flex flex-col justify-between lg:h-full lg:mr-8 relative z-10">
                    {/* Personal Info */}
                    <div className="text-center lg:text-left">
                        <div className="relative mb-4">
                            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent sm:text-5xl">
                                Oguz Kaan Dere
                            </h1>
                            <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                        </div>
                        <h2 className="mt-6 text-lg font-medium tracking-tight text-gray-700 dark:text-gray-300 sm:text-xl">
                            Mid-Level Full Stack Developer
                        </h2>
                        <p className="mt-4 lg:max-w-xs leading-relaxed text-gray-600 dark:text-gray-400">
                            I create scalable, high-performance applications using modern technologies like JavaScript, React, Node.js, and more.
                        </p>                        {/* Navigation - Hidden on small screens */}
                        <nav className="nav hidden lg:block" aria-label="In-page jump links">
                            <ul className="mt-16 space-y-2 w-max">
                                {['about', 'experiences', 'projects'].map((section) => (
                                    <li key={section}>
                                        <a
                                            className={`group flex items-center py-3 transition-all duration-300 ${activeSection === section ? 'text-white' : 'text-gray-500 dark:text-gray-400'
                                            }`}
                                            href={`#${section}`}
                                        >
                                            <span
                                                className={`nav-indicator mr-4 h-px transition-all duration-300 ${activeSection === section
                                                    ? 'w-16 bg-gradient-to-r from-blue-500 to-purple-600'
                                                    : 'w-8 bg-gray-400 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 dark:bg-gray-600'
                                                }`}
                                            ></span>
                                            <span
                                                className={`nav-text text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeSection === section ? 'text-white' : 'text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                                                }`}
                                            >
                                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>                    {/* Social Media Links */}
                    <div className="text-center mt-12 lg:mt-36">
                        <a
                            href="/Oguz_Kaan_Dere_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-8 inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Download CV
                        </a>
                        <ul className="flex justify-center space-x-4">
                            <li>
                                <a 
                                    href="https://github.com/ogzkaann" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="GitHub"
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                >
                                    <Image src="/github.svg" alt="GitHub" width={24} height={24}/>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://linkedin.com/in/oguz-kaan-dere" 
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    aria-label="LinkedIn"
                                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                >
                                    <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24}/>
                                </a>
                            </li>
                            {/* Add more social media links here */}
                        </ul>
                    </div>
                </header>                {/* Right Main Content - Flex column layout for mobile, row layout for larger screens */}
                <main className="flex-1 overflow-y-auto p-6 lg:ml-28 lg:overflow-y-visible relative z-10">
                    {/* About Section */}
                    <section
                        id="about"
                        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                        aria-label="About me"
                    >
                        <div className="text-center lg:text-left">
                            <div className="relative mb-8">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                    About Me
                                </h3>
                                <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            </div>
                            <div className="max-w-2xl text-base text-gray-600 dark:text-gray-400 space-y-6 leading-relaxed">
                                <p className="relative pl-4 border-l-4 border-blue-500/30">
                                    Back in high school, I decided that creating a Text-Based Adventure Game was a great
                                    way
                                    to dive headfirst into the chaos of coding. Fast forward to today, and I’ve found
                                    myself
                                    wading through both vast corporate mazes with sprawling, tangled codebases and
                                    intimate
                                    projects where I’ve built everything from scratch—one line at a time.
                                </p>
                                <p className="relative pl-4 border-l-4 border-purple-500/30">
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

                                <p className="relative pl-4 border-l-4 border-pink-500/30">
                                    When I’m not buried in code, you’ll likely find me diving into cultural, historical,
                                    philosophical, and sociological texts—because, let’s face it, there’s just too much
                                    out
                                    there to learn. And when my brain needs a break from all that enlightenment, I turn
                                    to
                                    my trusty 3D printer, pushing its limits with my latest designs.
                                </p>

                                <p className="relative pl-4 border-l-4 border-green-500/30">
                                    On a good day, I’m your go-to sarcastic and fun-loving individual. But I try to
                                    remember
                                    that life throws curveballs at all of us, so I make an effort to be kind—always.
                                </p>
                            </div>
                        </div>
                    </section>                    {/* Experience Section */}
                    <section
                        id="experiences"
                        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                        aria-label="Work experience"
                    ><div className="text-center lg:text-left">
                            <div className="relative mb-8">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                    Experience
                                </h3>
                                <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            </div>
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
                    >                        <div className="text-center lg:text-left">
                            <div className="relative mb-8">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                    Projects
                                </h3>
                                <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                            </div>                            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <ProjectCard
                                    title="Job Application Tracker"
                                    description="Track and manage all your job applications with status updates, deadlines, and interview scheduling in one intuitive platform."
                                    technologies={["React", "Node.js", "PostgreSQL", "Tailwind"]}
                                    demoLink="#"
                                    frontendLink="https://github.com/ogzkaann/job-application-tracker-frontend"
                                    backendLink="https://github.com/ogzkaann/job-application-tracker-backend"
                                />
                                <ProjectCard
                                    title="iBeacon Notification App"
                                    description="Android application that detects nearby iBeacons and sends personalized notifications based on proximity and beacon data."
                                    technologies={["Java", "Android Studio", "Bluetooth LE", "SQLite"]}
                                    demoLink="#"
                                    frontendLink="#"
                                    backendLink="#"
                                />
                                <ProjectCard
                                    title="E-Commerce Platform"
                                    description="Full-stack online shopping platform with user authentication, product catalog, shopping cart, and secure payment processing."
                                    technologies={["React", "Node.js", "PostgreSQL", "Stripe"]}
                                    demoLink="#"
                                    frontendLink="https://github.com/ogzkaann/ecommerce-frontend"
                                    backendLink="https://github.com/ogzkaann/ecommerce-backend"
                                />
                                <ProjectCard
                                    title="Task Management System"
                                    description="Collaborative task management tool with real-time updates, team collaboration features, and comprehensive project analytics."
                                    technologies={["Vue.js", "Express.js", "MongoDB", "Socket.io"]}
                                    demoLink="#"
                                    frontendLink="https://github.com/ogzkaann/task-manager-frontend"
                                    backendLink="https://github.com/ogzkaann/task-manager-backend"
                                />
                                <ProjectCard
                                    title="Weather Dashboard"
                                    description="Interactive weather dashboard featuring location-based forecasts, historical data visualization, and severe weather alerts."
                                    technologies={["React", "OpenWeather API", "Chart.js", "Geolocation"]}
                                    demoLink="#"
                                    frontendLink="https://github.com/ogzkaann/weather-dashboard"
                                    backendLink="#"
                                />
                                <ProjectCard
                                    title="Portfolio Website"
                                    description="Personal portfolio website showcasing projects and experience with responsive design, dark mode, and smooth animations."
                                    technologies={["Next.js", "TypeScript", "Tailwind CSS", "Vercel"]}
                                    demoLink="https://oguz-portfolio.vercel.app"
                                    frontendLink="https://github.com/ogzkaann/my-portfolio"
                                    backendLink="#"
                                />
                            </div>
                        </div>
                    </section>                    {/* Footer */}
                    <footer className="mt-16 max-w-full pb-16 text-sm text-gray-500 sm:pb-0">
                        <div className="text-center border-t border-gray-200 dark:border-gray-700 pt-8">
                            <p className="dark:text-gray-400">&copy; 2024 Oguz Kaan Dere. All rights reserved.</p>
                            <p className="mt-2 text-xs dark:text-gray-500">Built with Next.js & Tailwind CSS</p>
                        </div>
                    </footer>
                </main>
            </div>
        </>
    );
}
