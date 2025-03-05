import { createContext, useContext, useRef } from 'react'

type RefsContextType = {
  heroRef: React.RefObject<HTMLDivElement>
  aboutRef: React.RefObject<HTMLDivElement>
  skillsRef: React.RefObject<HTMLDivElement>
  projectsRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}

const RefsContext = createContext<RefsContextType | null>(null)

export const RefsProvider = ({ children }: { children: React.ReactNode }) => {
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  return (
    <RefsContext.Provider
      value={{ heroRef, aboutRef, skillsRef, projectsRef, contactRef }}
    >
      {children}
    </RefsContext.Provider>
  )
}

export const useRefs = () => {
  const context = useContext(RefsContext)
  if (!context) {
    throw new Error('useRefs must be used within a RefsProvider')
  }
  return context
}
