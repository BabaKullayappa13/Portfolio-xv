import { About } from '@/components/portfolio/about'
import { Achievements } from '@/components/portfolio/achievements'
import { AnimatedBackground } from '@/components/portfolio/animated-background'
import { Certifications } from '@/components/portfolio/certifications'
import { Contact } from '@/components/portfolio/contact'
import { CursorGlow } from '@/components/portfolio/cursor-glow'
import { Experience } from '@/components/portfolio/experience'
import { Footer } from '@/components/portfolio/footer'
import { Hero } from '@/components/portfolio/hero'
import { Navbar } from '@/components/portfolio/navbar'
import { Projects } from '@/components/portfolio/projects'
import { ResumeSection } from '@/components/portfolio/resume-section'
import { ScrollProgress } from '@/components/portfolio/scroll-progress'
import { Skills } from '@/components/portfolio/skills'
import { TechMarquee } from '@/components/portfolio/tech-marquee'

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
