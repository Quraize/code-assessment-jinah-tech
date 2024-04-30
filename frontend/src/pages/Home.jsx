import AppNavbar from "../components/navbar/AppNavbar";
import './GeneralStyles.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
     //for animation on scroll
  useEffect(() => {
    AOS.init({
        duration: 1300,
        easing: 'ease-in-out-back'
    })
  }, [])
  return (
    <div>
        <AppNavbar/>
        <div className="general-styles">
        <h1 data-aos="fade-right">Home</h1>
        <p data-aos="fade-left"><i>please! Log in for Evaluation.</i></p>
        <b style={{justifyContent:'center', textAlign: 'center'}}>Note:</b><span>I could not get the necessary API code snippets due to problems on my end. So I made 
          both frontend and backend myself. And tried to build the most of the APIs with the best of my ability.
          <i>P.S. I can do much more with Reactjs and frontend if given the necessary time.</i>
        </span>
        </div>
    </div>
  )
}
