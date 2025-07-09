import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react"; // optional: replace with inline SVG if avoiding libraries

export default function Peek() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;

            // Show when 100px from bottom
            if (scrollTop + windowHeight >= documentHeight - 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 200, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-6 right-6 z-50 bg-[#1e1e1e] border border-gray-700 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 cursor-pointer hover:bg-[#292929] transition"
                    onClick={() => window.open("https://developer-diganta.github.io/command-line-portfolio/", "_blank")}
                >
                    <Terminal className="text-accent w-5 h-5" />
                    <span className="text-sm font-medium">Visit my CLI Portfolio</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
