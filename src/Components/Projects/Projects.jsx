import { motion } from "framer-motion";

const projects = [
    {
        name: "Slate",
        description: "Slate is a virtual programming lab platform built for universities, teachers, and students. Developed a responsive web app using React, Node.js, and MongoDB, with features like secure JWT-based routing, Stripe payments, JOI validation, and plagiarism detection using hashing and string similarity.",
        image: "https://app-slate.netlify.app/SLATE.png",
        liveLink: "https://app-slate.netlify.app/",
        githubLink: "https://github.com/developer-diganta/FinalYearProject"
    },
    {
        name: "Amazon India Clone",
        description: "A fullstack e-commerce platform with user accounts, order tracking, and secure payment features. Built with React.js, Tailwind CSS, and Node.js. Integrated MongoDB for data storage and used Redux for state management.",
        image: "https://github.com/developer-diganta/Amazon-India-Clone/raw/main/Project%20Screenshot.JPG?raw=true",
        liveLink: "https://gracious-keller-08b8f9.netlify.app/",
        githubLink: "https://github.com/your-username/autotrack-clihttps://github.com/developer-diganta/Amazon-India-Clone"
    },
    {
        name: "Keep A Note",
        description: "A note taking app made using ReactJS for frontend, Node with ExpressJS for backend and MongoDB as database along with Google Login.",
        image: "https://raw.githubusercontent.com/developer-diganta/imgs/main/Keep%20A%20Note.JPG",
        liveLink: "https://dynamic-snickerdoodle-665f0f.netlify.app/",
        githubLink: "https://github.com/developer-diganta/keep-a-note"
    }
];


export default function Projects() {
    return (
        <div className="py-20 px-4 bg-background text-white" id="projects">
            <div className="text-5xl text-center font-bold mb-4">Projects</div>
            <div className="flex justify-center mb-12">
                <div className="h-1 w-24 bg-accent rounded-full shadow-md" />
            </div>

            <div className="space-y-24 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Image */}
                        <div className="w-full max-w-md mx-auto">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="rounded-xl shadow-lg w-full h-auto max-h-72 object-contain"
                            />
                        </div>

                        {/* Details */}
                        <div className="space-y-4">
                            <h3 className="text-3xl font-semibold">{project.name}</h3>
                            <p className="text-base opacity-80">{project.description}</p>
                            <div className="flex gap-4 pt-2">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-accent text-black px-4 py-2 rounded hover:brightness-110 transition"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
