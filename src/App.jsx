import './App.css'
import FooterSection from './Components/FooterSection/FooterSection'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import PopularSection from './Components/PopularSection/PopularSection'
import Steps from './Components/Steps/Steps'
import TransprentPricing from './Components/TransprentPricing/TransprentPricing'
import WorkFlow from './Components/WorkFlow/WorkFlow'

function App() {

  return (
    <div>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <PopularSection></PopularSection>
    <Steps></Steps>
    <TransprentPricing></TransprentPricing>
    <WorkFlow></WorkFlow>
    <FooterSection></FooterSection>
 
    </div>
  )
}

export default App
