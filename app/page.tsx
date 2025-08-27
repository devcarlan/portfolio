import About from './components/about'
import Contact from './components/contact'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'

const Home = () => {
  return (
    <main className='flex-1'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default Home
