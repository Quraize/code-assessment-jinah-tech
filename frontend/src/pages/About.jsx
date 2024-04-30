import AppNavbar from "../components/navbar/AppNavbar"
import './GeneralStyles.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
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
        <h1 data-aos="fade-right">About</h1>
        <p data-aos="fade-left"><i>please! Log in for Evaluation.</i></p>
        </div>
    </div>
  )
}
