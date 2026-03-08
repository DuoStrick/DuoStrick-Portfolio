import SectionContainer from '../../components/SectionContainer';

export const metadata = {
    title: "Support | Duostrick",
    description: "Support and FAQ for Duostrick applications.",
};

export default function Support() {
    return (
        <SectionContainer className="pt-24 min-h-[80vh]">
            <div className="max-w-3xl mx-auto text-center mt-12 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Support & FAQ</h1>
                <p className="text-xl text-gray-400 mb-16">
                    Need help with our games or apps? We're here to assist you.
                </p>

                <div className="bg-[#111111] p-8 md:p-10 rounded-3xl border border-[#222222] text-left mb-8 shadow-xl shadow-black/20 text-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">How do I restore my purchases?</h3>
                    <p className="text-gray-400">Make sure you are logged into the same Google Play account used for the purchase. The app should automatically restore it upon opening or from the settings menu.</p>
                </div>

                <div className="bg-[#111111] p-8 md:p-10 rounded-3xl border border-[#222222] text-left mb-16 shadow-xl shadow-black/20 text-lg">
                    <h3 className="text-2xl font-bold text-white mb-4">I found a bug, where can I report it?</h3>
                    <p className="text-gray-400">We appreciate your feedback! Please send an email detailing the issue, your device model, and OS version to our support email.</p>
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-white font-bold mb-6 text-xl">Still need help?</p>
                    <a href="mailto:support@tradeslook.com" className="px-10 py-4 text-lg rounded-full bg-[#8b5cf6] text-white font-bold hover:bg-[#7c3aed] transition-all hover:shadow-lg hover:shadow-[#8b5cf6]/30">
                        Contact Support
                    </a>
                </div>
            </div>
        </SectionContainer>
    );
}
