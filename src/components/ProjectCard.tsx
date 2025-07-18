import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies?: string[];
    demoLink?: string;
    frontendLink?: string;
    backendLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, demoLink, frontendLink, backendLink }) => {
    return (
        <div className="group relative flex flex-col justify-between rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm h-full">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 flex-grow">
                <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                        {title}
                    </h4>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mb-4 line-clamp-3">
                    {description}
                </p>
                
                {/* Technologies */}
                {technologies && technologies.length > 0 && (
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                            {technologies.slice(0, 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                            {technologies.length > 4 && (
                                <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md">
                                    +{technologies.length - 4}
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>            
            <div className="relative z-10 mt-4 flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                    {demoLink && demoLink !== "#" && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[80px] rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-2 text-xs font-medium text-white hover:from-blue-700 hover:to-blue-800 text-center transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            Demo
                        </a>
                    )}
                    {frontendLink && frontendLink !== "#" && (
                        <a
                            href={frontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[80px] rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 px-3 py-2 text-xs font-medium text-white hover:from-gray-800 hover:to-gray-900 text-center transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            Code
                        </a>
                    )}
                    {backendLink && backendLink !== "#" && (
                        <a
                            href={backendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[80px] rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 px-3 py-2 text-xs font-medium text-white hover:from-gray-800 hover:to-gray-900 text-center transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            API
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
