import DesktopNav from './components/DesktopNav.jsx'
import MobileNav from './components/MobileNav.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useActiveSection } from './hooks/useActiveSection.js'

const SECTION_IDS = ['hero', 'skills', 'experience', 'projects', 'contact']

export default function App() {
  const { activeId, scrolledPast } = useActiveSection(SECTION_IDS)

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-amber-100 selection:text-stone-900 pb-24 md:pb-0">
      <DesktopNav activeId={activeId} scrolledPast={scrolledPast} />
      <MobileNav activeId={activeId} />

      <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-24 space-y-20 sm:space-y-28 md:space-y-36">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
