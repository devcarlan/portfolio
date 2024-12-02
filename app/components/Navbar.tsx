import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center px-6 h-14 bg-[#1F1F1F] text-white'>
      <Link href='/'>
        <div>Carlan Henry</div>
      </Link>
      <nav className='flex items-center gap-6'>
        <button type='button'>Skills</button>
        <button type='button'>Projects</button>
        <button type='button'>Contact</button>
      </nav>
      <div className='flex items-center gap-4'>
        <a href='https://github.com/devcarlan' rel='nofollow' target='_blank'>
          <div className='flex justify-center items-center w-10 h-10 border-2 border-solid border-white rounded-md'>
            <Github className='w-4 h-4' />
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/carlan-henry-8aa5721b2/'
          rel='nofollow'
          target='_blank'
        >
          <div className='flex justify-center items-center w-10 h-10 border-2 border-solid border-white rounded-md'>
            <Linkedin className='w-4 h-4' />
          </div>
        </a>
      </div>
    </header>
  )
}

export default Navbar
