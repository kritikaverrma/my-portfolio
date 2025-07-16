import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['about', 'education', 'skills', 'projects', 'contact'];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-wide">Kritika.dev</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                className="relative group capitalize transition"
                            >
                                <span className="group-hover:text-pink-400">{item}</span>
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden flex flex-col items-center bg-black/90 backdrop-blur-md py-4 space-y-4">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                onClick={() => setOpen(false)}
                                className="text-lg capitalize hover:text-pink-400 transition"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
