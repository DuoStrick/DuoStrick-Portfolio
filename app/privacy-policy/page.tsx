import SectionContainer from '../../components/SectionContainer';

export const metadata = {
    title: "Privacy Policy | Duostrick",
    description: "Privacy policy for Duostrick applications.",
};

export default function PrivacyPolicy() {
    return (
        <SectionContainer className="pt-24 min-h-[80vh]">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">Privacy Policy</h1>
                <div className="text-gray-400 space-y-6 text-lg leading-relaxed">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        Duostrick ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use,
                        and protect your information when you use our mobile games, applications, and website.
                    </p>
                    <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Information We Collect</h2>
                    <p>
                        We may collect non-personal information through analytics and advertising partners (such as Google AdMob)
                        to improve our services and display relevant ads. This data does not personally identify you.
                    </p>
                    <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Advertising & Analytics</h2>
                    <p>
                        Our apps use third-party services like Google AdMob. These services may use cookies or similar technologies
                        to serve advertisements based on your past visits to our applications or other websites.
                    </p>
                    <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Children's Privacy</h2>
                    <p>
                        Our services do not knowingly collect personal information from children under 13. If you are a parent and
                        believe your child has provided us with personal information, please let us know so we can delete the information.
                    </p>
                    <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this policy, please contact us at <a href="mailto:support@tradeslook.com" className="text-[#8b5cf6] hover:underline">support@tradeslook.com</a>.
                    </p>
                </div>
            </div>
        </SectionContainer>
    );
}
