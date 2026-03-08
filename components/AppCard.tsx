import Link from 'next/link';
import Image from 'next/image';

interface AppProps {
    id: string;
    title: string;
    description: string;
    iconUrl: string;
    playStoreUrl: string;
}

export default function AppCard({ app }: { app: AppProps }) {
    return (
        <div className="card-hover bg-[#111111] rounded-[24px] p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start group">
            <div className="w-24 h-24 shrink-0 overflow-hidden rounded-[20px] bg-gray-800 border border-[#222222] relative flex items-center justify-center">
                {/* Fallback styling for image in case next/image has domain issues in dev without config */}
                <img src={app.iconUrl} alt={app.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8b5cf6] group-hover:to-[#ec4899] transition-all">{app.title}</h3>
                <p className="text-gray-400 mb-6 text-[15px] leading-relaxed max-w-lg">{app.description}</p>
                <div className="mt-auto">
                    <Link
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-gray-200 transition-colors"
                    >
                        Get on Google Play
                    </Link>
                </div>
            </div>
        </div>
    );
}
