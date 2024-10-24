/* eslint-disable no-unused-vars */
import BenefitsSection from "./Components/BenefitsSection"
import Hero from "./Components/Hero"
import NavBar from "./Components/NavBar"
import EmailSignup from "./Components/EmailSignup"
import Footer from "./Components/Footer"


export default function HealthLandingPage() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <BenefitsSection/>
      <EmailSignup/>
      <Footer/>
    </div>
  )
}
