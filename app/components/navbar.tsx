'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Skills' },
    { name: 'Projects' },
    { name: 'Contact' },
  ]

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault()

    setIsOpen(false)

    const ele = document.getElementById(id)
    ele?.scrollIntoView({ behavior: 'smooth' })
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
          <Link href='/' className='text-2xl font-bold'>
            <span className='text-[#238b45]'>CH</span>
          </Link>
          <nav className='hidden md:flex space-x-8'>
            {links.map((link) => (
              <a
                key={link.name}
                onClick={(e) => handleMenuItemClick(e, link.name.toLowerCase())}
                className='hover:text-[#238b45] transition-colors cursor-pointer'
              >
                {link.name}
              </a>
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
                <a
                  key={link.name}
                  className='text-[#333] hover:text-[#238b45] transition-colors py-2'
                  onClick={(e) =>
                    handleMenuItemClick(e, link.name.toLowerCase())
                  }
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
