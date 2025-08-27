'use client'

import { Database, Layout, Terminal } from 'lucide-react'
import { Fragment, useState } from 'react'
import CSS from './icons/css'
import HTML from './icons/html'
import JS from './icons/js'
import Next from './icons/next'
import React from './icons/react'
import Tailwind from './icons/tailwind'
import Progress from './progress'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend')

  const skillCategories = [
    {
      id: 'frontend',
      label: 'Frontend',
      icon: <Layout className='h-5 w-5' />,
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 93 },
        { name: 'React', level: 85 },
        { name: 'Next.js', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: <Database className='h-5 w-5' />,
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'Prisma', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: <Terminal className='h-5 w-5' />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 95 },
        { name: 'VS Code', level: 95 },
        { name: 'A.I', level: 80 },
      ],
    },
  ]

  const technologies = [
    {
      types: [
        { title: 'HTML', icon: <HTML /> },
        { title: 'CSS', icon: <CSS /> },
        { title: 'JavaScript', icon: <JS /> },
        { title: 'React', icon: <React /> },
        { title: 'Next.js', icon: <Next /> },
        { title: 'Tailwind', icon: <Tailwind /> },
      ],
    },
  ]
  return (
    <section id='skills' className='py-20 scroll-mt-[285px] md:scroll-mt-0'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>My Skills</h2>
          <p className='text-[#333]/80'>
            I&apos;ve worked with a variety of technologies in the web
            development world. Here&apos;s an overview of my technical skills
            and proficiency levels.
          </p>
        </div>
        <div className='max-w-3xl mx-auto'>
          <div className='flex rounded-md bg-[#f1f5f9] dark:bg-[#f1f5f9] p-1 mb-8'>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center justify-center gap-2 flex-1 px-3 py-2 text-sm font-medium rounded-sm transition-all
                  ${
                    activeTab === category.id
                      ? 'bg-white text-[#333] shadow-sm dark:bg-white dark:text-[#333]'
                      : 'text-[#64748b] hover:text-[#333]'
                  }`}
              >
                {category.icon}
                <span className='hidden sm:inline'>{category.label}</span>
              </button>
            ))}
          </div>
          <div className='mt-6'>
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={`space-y-6 ${
                  activeTab === category.id ? 'block' : 'hidden'
                }`}
              >
                {category.skills.map((skill) => (
                  <div key={skill.name} className='space-y-2'>
                    <div className='flex justify-between'>
                      <span className='font-medium'>{skill.name}</span>
                      <span className='text-sm text-[#333]/70'>
                        {skill.level}%
                      </span>
                    </div>
                    <Progress percentage={`${skill.level}`} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className='mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto'>
          {technologies.map((tech, i) => (
            <Fragment key={i}>
              {tech.types.map((type, j) => (
                <div
                  key={j}
                  className='flex flex-col items-center justify-center p-4 bg-[#f1f5f9]/50 rounded-lg hover:bg-[#f1f5f9] transition-colors'
                >
                  {type.icon}
                  <span className='mt-1 text-sm font-medium'>{type.title}</span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
