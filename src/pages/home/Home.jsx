import Faqs from "../../components/Faqs"
import MainHeader from "../../components/MainHeader"
import Programs from "../../components/Programs"
import Testimonial from "../../components/Testimonial"
import Values from "../../components/Values"
import "./home.css"

const Home = () => {
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