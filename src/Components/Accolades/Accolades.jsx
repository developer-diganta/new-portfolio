import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const accolades = [
    {
        title: "Google Summer of Code Mentor",
        date: "Feb 2023 – Present",
        description: "Mentoring TypeScript/JavaScript SDK under Keploy for GSoC 2023.",
    },
    {
        title: "Spider: The Web Crawler",
        date: "Sep 2020",
        description:
            "Top 5 among 250+ teams, awarded 'Budding Talent' in a national-level hackathon by ISTE, BIT Sindri.",
    },
    {
        title: "Hack-o-lantern (MLH)",
        date: "Oct 2021",
        description:
            "Won 'Best Costume Hack' for a creative frontend project in MLH localhost hackathon.",
    },
    {
        title: "Cloud Community Hackday",
        date: "Aug 2022",
        description:
            "Shortlisted among Top 10 in a hackathon by GDG Cloud Kolkata.",
    },
    {
        title: "Social Winter of Code 3.0",
        date: "Jan 2023 – Mar 2023",
        description: "Mentored contributors as Project Admin of the open-source project Dino.",
    },
    {
        title: "TCS CodeVita Season 10",
        date: "Apr 2022",
        description: "Secured Global Rank 170 in Round 2 of this global coding competition.",
    },
    {
        title: "Hack4Bengal",
        date: "Oct 2022 – Present",
        description: "Member of the Web team contributing to event tech and community work.",
    },
  ];

export default function Accolades() {
    return (
        <div className="bg-background text-white py-20 px-4" id="accolades">
            <div className="text-5xl text-center font-bold mb-4">Accolades</div>
            <div className="flex justify-center mb-12">
                <div className="h-1 w-24 bg-accent rounded-full shadow-md" />
            </div>

            <div className="relative h-[1500px] max-w-3xl mx-auto">
                {accolades.map((item, index) => (
                    <StickyCard key={index} index={index} {...item} />
                ))}
            </div>
        </div>
    );
}

function StickyCard({ title, issuer, date, description, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-40% 0px -40% 0px" });

    return (
        <motion.div
            ref={ref}
            className="sticky top-20 w-full bg-[#1e1e1e] border border-gray-700 rounded-xl p-6 shadow-xl mt-4
            "
            style={{ zIndex: 10 + index }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <h3 className="text-2xl font-semibold mb-1">{title}</h3>
            <div className="text-sm text-accent mb-2">{issuer} • {date}</div>
            <p className="text-sm opacity-80">{description}</p>
        </motion.div>
    );
}
