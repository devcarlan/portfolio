'use client'

import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleToTopClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault()

    const ele = document.getElementById(id)
    ele?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className='bg-[#f1f5f9]/50 py-6'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center'>
          <a
            onClick={(e) => handleToTopClick(e, 'home')}
            className='text-2xl font-bold mb-6 cursor-pointer'
          >
            <span className='text-[#238b45]'>Carlan</span>Henry
          </a>
          <div className='flex space-x-6 mb-8'>
            <Link
              href='https://github.com/devcarlan'
              className='text-[#09090b]/70 hover:text-[#238b45] transition-colors'
            >
              <Github className='h-5 w-5' />
              <span className='sr-only'>GitHub</span>
            </Link>
            <Link
              href='https://www.linkedin.com/in/carlan-henry-8aa5721b2/'
              className='text-[#09090b]/70 hover:text-[#238b45] transition-colors'
            >
              <Linkedin className='h-5 w-5' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
          </div>
          <div className='text-center text-sm text-[#09090b]/60'>
            <p>© {currentYear} Carlan Henry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
