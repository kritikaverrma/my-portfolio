export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900/80 backdrop-blur border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="text-white font-bold text-lg tracking-tight">
                    Kritika.dev
                </a>

                {/* Links */}
                <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
                    <li>
                        <a href="#about" className="hover:text-white transition">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-white transition">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-white transition">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
