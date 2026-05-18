import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { fetchPortfolioData } from './utils/api';

export default function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioData()
      .then((data) => setPortfolioData(data))
      .catch((err) => {
        console.warn('Could not reach API, using static data:', err.message);
        setPortfolioData(null);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero data={portfolioData?.personal} />
        <Marquee />
        <Skills data={portfolioData?.skills} />
        <Projects data={portfolioData?.projects} />
        <Achievements data={portfolioData?.achievements} />
        <Education data={portfolioData?.personal} />
        <Contact />
      </main>
      <Footer data={portfolioData?.personal} />
    </>
  );
}
