import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <img src="/logo.png" alt="Duostrick Logo" className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-8 rounded-[20px] shadow-xl shadow-[#8b5cf6]/20 border border-[#222222]" />

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tight max-w-4xl leading-tight">
                Building <span className="text-gradient">fun</span> mobile games<br className="hidden md:block" /> and <span className="text-gradient">smart</span> apps.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
                Duostrick is an independent mobile game and app developer focused on delivering polished, engaging experiences for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#apps" className="px-8 py-4 rounded-full bg-[#8b5cf6] text-white font-bold hover:bg-[#7c3aed] hover:shadow-lg hover:shadow-[#8b5cf6]/30 transition-all text-center">
                    Explore Apps
                </Link>
                <Link href="https://play.google.com/store/apps/dev?id=8989641209983926608" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-[#1a1a1a] text-white font-bold hover:bg-[#2a2a2a] border border-[#333] transition-all text-center">
                    Google Play Profile
                </Link>
            </div>
        </section>
    );
}
