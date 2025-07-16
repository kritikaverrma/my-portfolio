// components/Skills.tsx
import { FaPython, FaJava, FaJs, FaReact, FaNode, FaGit, FaGithub, FaDocker } from "react-icons/fa";
import { SiCplusplus, SiPhp, SiMysql, SiFirebase, SiTailwindcss, SiXampp, SiMongodb, SiNextdotjs, SiFigma, SiVuedotjs, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiAssemblyscript, SiStreamlit, SiTensorflow, SiWebpack } from "react-icons/si";

const skills = [
    {
        category: "Programming Languages",
        items: [
            { name: "Python", icon: <FaPython /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "PHP", icon: <SiPhp /> },
            { name: "SQL", icon: <SiMysql /> },
        ],
    },
    {
        category: "Frontend Development",
        items: [
            { name: "HTML / CSS", icon: <SiHtml5 /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Responsive Design", icon: <span className="text-xl">📱</span> },
            { name: "Bootstrap", icon: <SiBootstrap /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Vue.js", icon: <SiVuedotjs /> },
            { name: "Webpack", icon: <SiWebpack /> },
        ],
    },
    {
        category: "Backend Development",
        items: [
            { name: "Node.js", icon: <SiHtml5 /> },
            { name: "Express.js", icon: <FaReact /> },
            { name: "Websockets", icon: <SiTailwindcss /> },
            { name: "REST APIs", icon: <span className="text-xl">📱</span> },
            { name: "MongoDB", icon: <SiBootstrap /> },
            { name: "PostgreSQL", icon: <SiWebpack /> },
        ],
    },
    {
        category: "Tools & Technologies",
        items: [
            { name: "Git", icon: <FaGit /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "XAMPP", icon: <SiXampp /> },
            { name: "Docker", icon: <FaDocker /> },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills</h2>

                {skills.map((group) => (
                    <div key={group.category} className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-600">{group.category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                            {group.items.map(({ name, icon }) => (
                                <div
                                    key={name}
                                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
                                >
                                    <div className="text-3xl mb-2 text-blue-500">{icon}</div>
                                    <p className="text-sm text-gray-800 dark:text-gray-200 text-center">{name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
