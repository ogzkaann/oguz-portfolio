import Head from "next/head"; // For meta tags
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Oguz Kaan Dere | FullStack Developer</title>
                <meta name="description"
                      content="Oguz Kaan Dere is a Full Stack Developer specializing in modern web technologies. Explore his projects and get in touch!"/>
                <meta name="keywords"
                      content="Oguz Kaan Dere, Full Stack Developer, JavaScript, TypeScript, Angular, Vue.js, Node.js, Web Development"/>
                <meta name="author" content="Oguz Kaan Dere"/>
                <link rel="canonical" href="https://oguz-portfolio.vercel.app/"/>
            </Head>

            <main className="flex min-h-screen flex-col items-center justify-between p-24">

                {/* Personal Heading with structured data for better search engine understanding */}
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">Hello, I&apos;m Oguz Kaan Dere</h1>
                    <p className="text-xl text-gray-600">FullStack Developer</p>

                    {/* Structured Data Script */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Oguz Kaan Dere",
              "jobTitle": "FullStack Developer",
              "url": "https://oguz-portfolio.vercel.app/", 
              "sameAs": [
                "https://linkedin.com/in/oguz-kaan-dere",
                "https://github.com/ogzkaann"
              ] 
            }
          `,
                        }}
                    />
                </div>

                {/* About Me Section with descriptive headings */}
                <section className="mt-12 max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                    <p className="text-lg text-gray-700">
                        I am a Full Stack Developer specializing in modern web technologies like JavaScript, TypeScript,
                        Angular, Vue.js and Node.js. I create scalable, high-performance applications that combine
                        robust functionality with clean, user-friendly design.
                    </p>
                </section>

                {/* Projects Section with image previews and improved accessibility */}
                <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
                    <div
                        className="rounded-lg border border-transparent p-5 hover:border-gray-300 hover:bg-gray-100 transition-colors">
                        {/* Add an image preview for the project */}
                        <Image
                            src="/project1-preview.svg"
                            alt="Project 1 Preview"
                            width={300}
                            height={200}
                            className="rounded-md mb-3"
                        />

                        <h3 className="text-2xl font-semibold mb-2">Job Application Tracker</h3>
                        <p className="text-sm text-gray-600">Effortlessly track and manage all your job applications in
                            one powerful and intuitive platform</p>
                        <a
                            href="https://github.com/ogzkaann/job-application-tracker-frontend"
                            className="text-blue-500 mt-4 inline-block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project Details →
                        </a>
                    </div>
                    {/* Add similar cards for other projects */}
                </section>

                {/* Contact Section with a call to action */}
                <section className="mt-12 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Let&apos;s Connect</h2>
                    <p className="text-lg text-gray-700">
                        Interested in collaborating or have a project in mind? Feel free to reach out!
                    </p>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="https://linkedin.com/in/oguz-kaan-dere" target="_blank" rel="noopener noreferrer">
                            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24}/>
                        </a>
                        <a href="https://github.com/ogzkaann" target="_blank" rel="noopener noreferrer">
                            <Image src="/github.svg" alt="GitHub" width={24} height={24}/>
                        </a>
                        {/* Add other social media links here */}
                    </div>
                </section>
            </main>
        </>
    );
}