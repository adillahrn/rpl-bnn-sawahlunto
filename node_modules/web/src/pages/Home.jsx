import Hero from '../components/Hero';
import Profile from '../components/Profile';
import OrgStructure from '../components/OrgStructure';
import Stats from '../components/Stats';
import News from '../components/News';
import Services from '../components/Services';
import Report from '../components/Report';

export default function Home() {
  return (
    <main className="pt-20 md:pt-32">
      <Hero />
      <Profile />
      <OrgStructure />
      <Stats />
      <News />
      <Services />
      <Report />
    </main>
  );
}
