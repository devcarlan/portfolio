import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='py-20 bg-[#f1f5f9]/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className='md:w-1/2 order-2 md:order-1'>
            <h2 className='text-3xl font-bold mb-6'>About Me</h2>
            <p className='text-[#09090b]/80 mb-4'>
              I&apos;m a passionate software engineer with expertise in modern
              web technologies. I specialize in creating fast, responsive,
              user-friendly websites and applications using HTML, CSS,
              JavaScript, React, and Next.js.
            </p>
            <p className='text-[#09090b]/80 mb-6'>
              With a strong foundation in front-end development and a keen eye
              for details, I strive to build digital experiences that are not
              only visually appealing but also performant and accessible.
            </p>
            <div className='flex flex-wrap gap-6 mb-8'>
              <div>
                <h3 className='font-medium mb-1'>Location</h3>
                <p className='text-[#09090b]/70'>Georgia, USA</p>
              </div>
              <div>
                <h3 className='font-medium mb-1'>Education</h3>
                <p className='text-[#09090b]/70'>
                  B.S Computer Science - Software Development
                </p>
              </div>
            </div>

            {/* 
              * Add Later
            <button className='inline-flex items-center h-11 px-4 gap-2 rounded-md border bg-[#fff] hover:bg-[#ededed] hover:text-[#1e293b]'>
              <FileText size={16} />
              Download Resume
            </button> */}
          </div>
          <div className='md:w-1/2 order-1 md:order-2'>
            <div className='relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-[#238b45]/20'>
              <Image
                //replace placeholder with actual image
                src='/placeholder.svg?height=320&width=320'
                alt='Carlan'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
