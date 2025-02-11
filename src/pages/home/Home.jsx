import Faqs from "../../components/Faqs"
import MainHeader from "../../components/MainHeader"
import Programs from "../../components/Programs"
import Testimonial from "../../components/Testimonial"
import Values from "../../components/Values"
import "./home.css"
import { useEffect } from "react";



const Home = () => {
    useEffect(() => {
      window.scroll(0, 0);
    }, []);


  return (
    <>
    <MainHeader />
    <Programs />
    <Values />
    <Faqs />
    <Testimonial />
    </>
  )
}

export default Home