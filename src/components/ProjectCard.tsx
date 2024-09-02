import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    demoLink?: string;
    frontendLink?: string;
    backendLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, demoLink, frontendLink, backendLink }) => {
    return (
        <div className="flex flex-col justify-between rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-800 min-w-[280px] max-w-[350px]">
            <div className="flex-grow">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 items-center justify-start">
                {demoLink && (
                    <a
                        href={demoLink}
                        className="flex-1 min-w-[120px] rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 text-center"
                    >
                        Demo
                    </a>
                )}
                {frontendLink && (
                    <a
                        href={frontendLink}
                        className="flex-1 min-w-[120px] rounded bg-gray-800 px-3 py-2 text-sm text-white hover:bg-gray-900 text-center"
                    >
                        Frontend Code
                    </a>
                )}
                {backendLink && (
                    <a
                        href={backendLink}
                        className="flex-1 min-w-[120px] rounded bg-gray-800 px-3 py-2 text-sm text-white hover:bg-gray-900 text-center"
                    >
                        Backend Code
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
