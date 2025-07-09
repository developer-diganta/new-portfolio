import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="py-16 px-4 bg-background" id="about">
            <div className="text-5xl text-center font-bold text-white mb-4">About Me</div>
            <div className="flex justify-center mb-12">
                <div className="h-1 w-24 bg-accent rounded-full shadow-md" />
            </div>
            <div className="grid grid-cols-12 items-center gap-8 max-w-7xl mx-auto">
                <motion.div
                    className="col-span-12 md:col-span-5 relative w-full flex justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Asymmetrical Background Shape */}
                    <div
                        className="absolute w-[320px] h-[220px] bg-accent opacity-40 blur-xl z-0"
                        style={{
                            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                            transform: 'rotate(-15deg)',
                            top: '50%',
                            left: '50%',
                            translate: '-50% -50%',
                        }}
                    />
                    {/* Profile Image */}
                    <motion.img
                        src="assets/self.png"
                        alt="Diganta Kr Banik"
                        className="h-64 w-64 object-cover relative z-10 rounded-xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    />
                </motion.div>

                <motion.div
                    className="col-span-12 md:col-span-7 text-white text-lg leading-relaxed space-y-4"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p>
                        👨‍💻 I'm currently a Software Development Engineer at <span className="font-semibold text-accent">Argusoft</span>,
                        with over a year of hands-on experience building scalable web solutions.
                    </p>
                    <p>
                        🔍 Passionate about <span className="text-accent">open source</span>, <span className="text-accent">web technologies</span>, and all things tech.
                    </p>
                    <p>
                        🌐 I’ve actively contributed to open-source projects and even served as a <span className="text-accent">Developer Advocate</span> in the past—blending code with community.
                    </p>
                    <p>
                        🚀 I believe in learning by building and love turning ideas into impactful digital products.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
