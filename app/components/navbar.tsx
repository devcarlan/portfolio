'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useRefs } from '../context/RefsContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { heroRef, aboutRef, skillsRef, projectsRef, contactRef } = useRefs()

  const links = [
    { name: 'Home', ref: heroRef },
    { name: 'About', ref: aboutRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Contact', ref: contactRef },
  ]

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMenuItemClick = (ref: React.RefObject<HTMLDivElement>) => {
    setIsOpen(false)
    scrollToSection(ref)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className='container max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <button
            onClick={() => scrollToSection(heroRef)}
            className='text-2xl font-bold'
          >
            <span className='text-[#238b45]'>CH</span>
          </button>
          <nav className='hidden md:flex space-x-8'>
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.ref)}
                className='hover:text-[#238b45] transition-colors'
              >
                {link.name}
              </button>
            ))}
          </nav>
          <button
            className='md:hidden text-[#333]'
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label='Toggle menu'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden bg-white/95 backdrop-blur-md'>
          <div className='container mx-auto px-4 py-4'>
            <nav className='flex flex-col space-y-4'>
              {links.map((link) => (
                <button
                  key={link.name}
                  className='text-[#333] hover:text-[#238b45] transition-colors py-2'
                  onClick={() => handleMenuItemClick(link.ref)}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
