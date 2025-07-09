import { Mail, Github, Linkedin, Twitter, Globe, PenTool } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-white py-10 px-6 mt-20">
            <div className="max-w-4xl mx-auto text-center space-y-6">

                {/* Central message */}
                <div className="text-lg opacity-80">
                    Made with <span className="text-red-500">❤️</span> and <span className="text-blue-400">React</span> by <span className="text-accent font-semibold">Diganta</span>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 text-gray-400 text-lg">
                    <a
                        href="https://in.linkedin.com/in/diganta-kr-banik-1659121a7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://twitter.com/banik_diganta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition"
                        aria-label="Twitter"
                    >
                        <Twitter size={24} />
                    </a>
                    <a
                        href="https://github.com/developer-diganta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://devpost.com/digantabanik2000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition"
                        aria-label="Devpost"
                    >
                        <Globe size={24} />
                    </a>
                    <a
                        href="mailto:digantabanik2000@gmail.com"
                        className="hover:text-accent transition"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                    <a
                        href="https://chrysaor.hashnode.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition"
                        aria-label="Hashnode"
                    >
                        <PenTool size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
