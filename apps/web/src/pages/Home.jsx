import Hero from '../components/Hero';
import Profile from '../components/Profile';
import OrgStructure from '../components/OrgStructure';
import Stats from '../components/Stats';
import Services from '../components/Services';
import News from '../components/News';
import Report from '../components/Report';

export default function Home() {
  return (
    <main className="pt-20 md:pt-32">
      <Hero />
      <Profile />
      <OrgStructure />
      <Stats />
      <Services />
      <News />
      <Report />
    </main>
  );
}
