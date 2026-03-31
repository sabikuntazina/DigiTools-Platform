import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import PopularSection from './Components/PopularSection/PopularSection'
import Steps from './Components/Steps/Steps'

function App() {

  return (
    <div>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <PopularSection></PopularSection>
    <Steps></Steps>
 
    </div>
  )
}

export default App
