import Header from "../components/header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import ContactForm from "../components/ContactForm/ContactForm"
import { useContext } from "react"
import { AppContext } from '../contexts/AppContext';

function Contact(){
    const appContext = useContext(AppContext)
    return(
        <>
        <Header />   
        <Banner title={appContext.languages[appContext.language].menu.contact} image="image.contact.jpg" />    
        <div className="container">   
            <ContactForm />
        </div>
        <Footer />
        </>
    )
}

export default Contact