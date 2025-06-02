import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div id="contact" className="py-20 px-4 bg-background text-white">
            <div className="text-5xl text-center font-bold mb-4">Contact Me</div>
            <div className="flex justify-center mb-12">
                <div className="h-1 w-24 bg-accent rounded-full shadow-md" />
            </div>

            {/* Subsection: About */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto text-center text-lg text-gray-300 mb-12"
            >
                I'm a <span className="text-accent font-medium">Full Stack Web Developer</span> who loves building scalable, performant applications using <span className="text-accent">React, Node.js, MongoDB</span> and more. Let’s connect!
            </motion.div>

            {/* Contact Form */}
            <motion.form
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-xl mx-auto space-y-6"
                action="https://formspree.io/f/your-form-id" // Replace with your form URL
                method="POST"
            >
                <div>
                    <label className="block text-sm mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-zinc-800 text-white border border-zinc-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>
                <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-zinc-800 text-white border border-zinc-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>
                <div>
                    <label className="block text-sm mb-1">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        required
                        className="w-full bg-zinc-800 text-white border border-zinc-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-accent text-black font-medium px-6 py-3 rounded-md hover:brightness-110 transition"
                >
                    Send Message
                </button>
            </motion.form>
        </div>
    );
}
