import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Or any icon lib you prefer

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full bg-background text-primary shadow-md z-50 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My Portfolio</h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#about" className="hover:text-accent">About</a>
                    <a href="#tech" className="hover:text-accent">Tech</a>
                    <a href="#experience" className="hover:text-accent">Experience</a>
                    <a href="#projects" className="hover:text-accent">Projects</a>
                    <a href="#achievements" className="hover:text-accent">Achievements</a>
                </nav>

                {/* Hamburger Button (mobile only) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-primary focus:outline-none"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-4 px-4">
                    <a onClick={() => setIsOpen(false)} href="#about" className="block hover:text-accent">About</a>
                    <a onClick={() => setIsOpen(false)} href="#experience" className="block hover:text-accent">Experience</a>
                    <a onClick={() => setIsOpen(false)} href="#projects" className="block hover:text-accent">Projects</a>
                    <a onClick={() => setIsOpen(false)} href="#achievements" className="block hover:text-accent">Achievements</a>
                </div>
            )}
        </div>
    );
}

