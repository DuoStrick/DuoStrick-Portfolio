import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full border-t border-[#222222] bg-[#0a0a0a] py-8 mt-auto z-10 relative">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <div>&copy; {new Date().getFullYear()} Duostrick. All rights reserved.</div>
                <div className="flex gap-6">
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/support" className="hover:text-white transition-colors">Support</Link>
                </div>
            </div>
        </footer>
    );
}
