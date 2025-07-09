import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const experiences = [
    {
        role: "Programmer Analyst",
        company: "Argusoft",
        duration: "July 2023 – Present",
        logo: "https://www.argusoft.com/images/logo.png",
        description: (
            <>
                At Argusoft, I work on a scalable, real-time communication product built using <span className="text-accent font-medium">Angular</span>, <span className="text-accent font-medium">Node.js</span>, <span className="text-accent font-medium">MongoDB</span>, and <span className="text-accent font-medium">WebSockets</span>.
                My role involves building robust frontend experiences, architecting efficient backend APIs, and ensuring seamless real-time data flow across the application.
            </>
        ),
    },
    {
        role: "Developer Relations Engineer Intern",
        company: "Keploy",
        duration:"February 2023 - June 2023",
        logo: "https://camo.githubusercontent.com/74cbc79070c04e7077cfd86981c110678fe434e9269ea8f52eafb37b781cfb4a/68747470733a2f2f646f63732e6b65706c6f792e696f2f696d672f6b65706c6f792d6c6f676f2d6461726b2e7376673f733d32303026763d34",
        description: (
            <p className="text-base text-gray-300 leading-relaxed"> At <span className="text-accent font-medium">Keploy</span>, I focused on streamlining the developer experience by creating comprehensive code content and enhancing documentation. My work included producing tutorial videos and resources that helped developers integrate with Keploy's platform more efficiently. Additionally, I led sessions at colleges on <span className="text-accent font-medium">API literacy</span> and <span className="text-accent font-medium">API testing</span>, empowering the next generation of developers with critical skills in modern API development and testing practices. </p>

        )
    },
    {   
        role: "Software Developer Intern",
        company: "CuriousJr (Curiosity Edtech Ltd)",
        duration: "November 2021 - February 2022",
        logo: "https://static.pw.live/production-curiousjr-fundoo/static/images/landing-page/cjr-black-logo.webp",
        description: (
            <p className="text-base text-gray-300 leading-relaxed"> As an <span className="text-accent font-medium">SDE Intern</span> at <span className="text-accent font-medium">CuriousJr</span>, I worked with the technical content team to build JavaScript-based web apps for an online coding platform with <span className="text-accent font-medium">3000+ users</span>, helping them learn and test coding skills interactively. </p>
        )
    }
];

export default function Experience() {
    return (
        <div className="py-16 px-4 text-white">
            <div className="text-5xl text-center font-bold text-white mb-4" id="experience">Experience</div>
            <div className="flex justify-center mb-12">
                <div className="h-1 w-24 bg-accent rounded-full shadow-md" />
            </div>
            <div className="relative max-w-4xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 h-full w-1 bg-accent/30 rounded-full" />

                <div className="space-y-12 pl-16">
                    {experiences.map((exp, index) => (
                        <ExperienceCard exp={exp} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ExperienceCard({ exp }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 40 });
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ duration: 0.6 }}
            className="relative bg-card border border-accent/30 rounded-2xl p-6 shadow-none hover:shadow-[0_0_30px_#4ADE80] transition-shadow duration-500 flex flex-col md:flex-row items-center gap-6"
        >
            {/* Timeline dot */}
            <div className="absolute -left-9 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background z-10" />

            {/* Logo */}
            <div className="flex-shrink-0 w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center shadow-md">
                <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Text */}
            <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-accent mb-2">
                    {exp.company} · {exp.duration}
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                    {exp.description}
                </p>
            </div>
        </motion.div>
    );
}
  