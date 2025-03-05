import { ArrowDown } from 'lucide-react'
import Link from 'next/link'

type propTypes = {
  ref: React.Ref<HTMLDivElement>
  projectsRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}

const Hero = ({ ref, projectsRef, contactRef }: propTypes) => {
  const handleScrollToElement = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id='home'
      className='relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight mb-6'>
            Hi, I&apos;m <span className='text-[#238b45]'>Carlan Henry</span>
          </h1>
          <p className='text-xl md:text-2xl text-[#333] mb-10 leading-relaxed'>
            A software engineer specializing in creating exceptional digital
            experiences with React and Next.js
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={() => handleScrollToElement(projectsRef)}
              className='h-11 rounded-md px-8 bg-[#238b45] text-white hover:bg-[#238b45]/90'
            >
              View My Work
            </button>
            <button
              onClick={() => handleScrollToElement(contactRef)}
              className='h-11 rounded-md px-8 border bg-[#fff] hover:bg-[#ededed] hover:text-[#1e293b]'
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block'>
        <Link href='#about' aria-label='Scroll down'>
          <ArrowDown className='text-[#238b45]' size={32} />
        </Link>
      </div>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10'>
        <div className='absolute top-1/4 right-1/4 w-64 h-64 bg-[#238b45]/10 rounded-full filter blur-3xl'></div>
        <div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#f1f5f9]/10 rounded-full filter blur-3xl'></div>
      </div>
    </section>
  )
}

export default Hero
