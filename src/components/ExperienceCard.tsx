interface ExperienceCardProps {
    title: string;
    company: string;
    date: string;
    responsibilities: string[];
    technologies: string[];
}

const ExperienceCard = ({ title, company, date, responsibilities, technologies }: ExperienceCardProps) => {
    return (
        <div className="group relative rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
            {/* Subtle accent line */}
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-l-xl opacity-80"></div>
            
            {/* Header */}
            <div className="mb-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">{company}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
                </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
                <ul className="space-y-3">
                    {responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 transition-transform duration-200"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
