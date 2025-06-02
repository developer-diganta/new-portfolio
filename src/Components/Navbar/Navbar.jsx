import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Or any icon lib you prefer

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full bg-background text-primary shadow-md z-50 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className='flex items-center gap-1'>
                <img src="https://raw.githubusercontent.com/developer-diganta/me/refs/heads/master/CHR.jpg" alt="chrysaor" className='h-12 w-12'/>
                <h1 className="text-2xl font-extrabold">DKB</h1>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#about" className="hover:text-accent">About</a>
                    <a href="#tech" className="hover:text-accent">Tech</a>
                    <a href="#experience" className="hover:text-accent">Experience</a>
                    <a href="#projects" className="hover:text-accent">Projects</a>
                    <a href="#accolades" className="hover:text-accent">Accolades</a>
                    <a href="#contact" className="hover:text-accent">Contact</a>
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

