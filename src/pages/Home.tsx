import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </>
  )
}
