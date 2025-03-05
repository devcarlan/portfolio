'use client'

import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Projects from './components/projects'
import Skills from './components/skills'
import { RefsProvider, useRefs } from './context/refsContext'

const PageContent = () => {
  const { heroRef, aboutRef, skillsRef, projectsRef, contactRef } = useRefs()

  return (
    <RefsProvider>
      <Hero ref={heroRef} projectsRef={projectsRef} contactRef={contactRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </RefsProvider>
  )
}

const Home = () => {
  return (
    <RefsProvider>
      <Navbar />
      <main className='flex-1'>
        <PageContent />
      </main>
      <Footer />
    </RefsProvider>
  )
}

export default Home
