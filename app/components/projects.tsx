import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type propTypes = {
  ref: React.Ref<HTMLDivElement>
}

const Projects = ({ ref }: propTypes) => {
  const works = [
    {
      title: 'Casual Streams',
      description:
        'A service to help connect viewers with smaller streamers. Interfacing with the Twitch API and built with Next.js and TailwindCSS.',
      image: '/casualstreams.jpg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Twitch API'],
      liveUrl: 'https://casualstreams.vercel.app/',
      githubUrl: 'https://github.com/devcarlan/casualstreams',
    },
    {
      title: 'West Tech Shipping',
      description:
        'A redesign of the front page for the caribbean shipping company West Tech. Built with Next.js and TailwindCSS.',
      image: '/wtech.jpg',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      liveUrl: 'https://devcarlan.github.io/wtech/',
      githubUrl: 'https://github.com/devcarlan/wtech',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern portfolio website showcasing my projects and skills. Built with Next.js and Tailwind CSS.',
      image: '/portfolio.jpg',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      liveUrl: 'https://www.carlan.dev',
      githubUrl: 'https://github.com/devcarlan/portfolio',
    },
    {
      title: 'Dare2Care Outreach',
      description:
        'A WordPress custom theme website for the non-profit Dare2Care Outreach. Built with WordPress, HTML and CSS.',
      image: '/d2c.jpg',
      tags: ['Wordpress', 'HTML', 'CSS'],
      liveUrl: 'https://dare2careoutreach.org/',
      githubUrl: 'Private',
    },
  ]

  return (
    <section ref={ref} id='projects' className='py-20 bg-[#f1f5f9]/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>My Projects</h2>
          <p className='text-[#333]/80'>
            Here are some of my recent projects. Each was built to solve a
            specific problem or to learn and practice new technologies.
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {works.map((project, i) => (
            <div
              key={i}
              className='rounded-lg bg-white text-[#09090b] overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow'
            >
              <div className='relative h-48 w-full'>
                <Image src={project.image} alt={project.title} fill />
              </div>
              <div className='p-6 pt-0'>
                <h3 className='text-xl font-bold mt-4 mb-2'>{project.title}</h3>
                <p className='text-[#333]/70 text-sm mb-4'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className='inline-flex font-normal border-transparent bg-[#f1f5f9] text-[#333] hover:bg-[#f1f5f9]/80 items-center rounded-full border px-2.5 py-0.5 text-xs'
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <button className='flex items-center h-9 rounded-md px-3 gap-2 border border-[#e2e8f0] bg-white hover:bg-[#f1f5f9]'>
                    <Link
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2'
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </Link>
                  </button>
                  {project.githubUrl !== 'Private' && (
                    <button className='h-9 rounded-md px-3 gap-2 border border-[#e2e8f0] bg-white hover:bg-[#f1f5f9]'>
                      <Link
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'
                      >
                        <Github size={14} />
                        Code
                      </Link>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <button className='h-11 rounded-md px-8 bg-[#238b45] text-white hover:bg-[#238b45]/90'>
            <Link
              href='https://github.com/devcarlan'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2'
            >
              <Github size={18} />
              View More on GitHub
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
