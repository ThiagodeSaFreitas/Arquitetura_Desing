import Header from "../components/header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import AboutText from "../components/AboutText/AboutText"

function About(){
    return(
        <>
         <Header />   
        <Banner title="About" image="imageAbout.jpg" />    
        <div className="container">   
           <AboutText />
        </div>
        <Footer />
        </>
    )
}

export default About