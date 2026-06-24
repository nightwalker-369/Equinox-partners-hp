import { useEffect } from 'react'
import MarketingNav from './components/MarketingNav.jsx'
import Hero from './components/Hero.jsx'
import Mission from './components/Mission.jsx'
import PainSection from './components/PainSection.jsx'
import SolutionSection from './components/SolutionSection.jsx'
import WhyEquinox from './components/WhyEquinox.jsx'
import CaseStudyCards from './components/CaseStudyCards.jsx'
import Profile from './components/Profile.jsx'
import CompanyOverview from './components/CompanyOverview.jsx'
import ContactBlock from './components/ContactBlock.jsx'
import MarketingFooter from './components/MarketingFooter.jsx'
import { runHeroEntrance, runScrollReveal, runNavCondense } from './useSiteMotion.js'

export default function App() {
  useEffect(() => {
    const root = document.getElementById('root')
    runHeroEntrance(root)
    const cleanupReveal = runScrollReveal(root)
    const cleanupNav = runNavCondense()
    return () => {
      cleanupReveal && cleanupReveal()
      cleanupNav && cleanupNav()
    }
  }, [])

  return (
    <>
      <MarketingNav active="home" />
      <Hero />
      <Mission />
      <PainSection />
      <SolutionSection />
      <WhyEquinox />
      <CaseStudyCards />
      <Profile />
      <CompanyOverview />
      <ContactBlock />
      <MarketingFooter />
    </>
  )
}
