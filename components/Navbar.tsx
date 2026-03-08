import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed w-full top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#222222]">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <img src="/logo.png" alt="Duostrick Logo" className="w-8 h-8 rounded" />
                    Duostrick
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                    <Link href="/#apps" className="hover:text-white transition-colors">Apps</Link>
                    <Link href="/#about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
