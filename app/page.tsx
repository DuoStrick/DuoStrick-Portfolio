import Hero from '../components/Hero';
import SectionContainer from '../components/SectionContainer';
import AppCard from '../components/AppCard';
import appsData from '../data/apps.json';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />

      <SectionContainer id="apps" className="border-t border-[#222222]">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Apps</h2>
          <p className="text-gray-400 max-w-2xl text-lg">Discover our officially published titles on Google Play, built with care to provide the best experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {appsData.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer id="about" className="border-y border-[#222222] bg-[#0a0a0a]/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">About the Studio</h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            Duostrick is a small, independent mobile developer studio passionate about building engaging puzzle games and polished mobile applications. We believe in high-quality design, smart mechanics, and intuitive user experiences.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            From the endless challenges of 2048 Infinity Grid to our upcoming smart utilities, our goal is to bring joy and seamless functionality to users worldwide across all their Android devices.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer id="contact">
        <div className="max-w-3xl mx-auto text-center bg-[#111111] p-12 rounded-[32px] border border-[#222222] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ec4899]/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-10 text-lg max-w-lg mx-auto">
            Have a question, feedback, or need support with one of our apps? Reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@tradeslook.com" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
              Email Us
            </a>
            <a href="https://play.google.com/store/apps/dev?id=8989641209983926608" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-transparent border-2 border-[#333333] text-white font-bold hover:bg-[#222222] hover:border-[#555] transition-colors">
              Google Play Profile
            </a>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
