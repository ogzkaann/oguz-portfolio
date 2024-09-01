interface ExperienceCardProps {
    title: string;
    company: string;
    date: string;
    responsibilities: string[];
    technologies: string[];
}

const ExperienceCard = ({ title, company, date, responsibilities, technologies }: ExperienceCardProps) => {
    return (
        <div className="rounded-lg p-6 shadow-md">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">{title} - {company}</h4>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{date}</p>
            <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="rounded-full bg-blue-300 bg-opacity-50 text-white px-3 py-1 text-xs font-semibold"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
