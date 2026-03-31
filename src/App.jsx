import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import PopularSection from './Components/PopularSection/PopularSection'
import Steps from './Components/Steps/Steps'
import TransprentPricing from './Components/TransprentPricing/TransprentPricing'

function App() {

  return (
    <div>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <PopularSection></PopularSection>
    <Steps></Steps>
    <TransprentPricing></TransprentPricing>
 
    </div>
  )
}

export default App
