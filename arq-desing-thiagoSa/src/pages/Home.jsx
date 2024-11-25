import Banner from "../components/Banner/Banner"
import Header from "../components/header/Header"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button/Button"
import ProjectsList from "../components/ProjectsList/ProjectsList"


function Home(){
    return(
        <>
        <Header />       
        <div className="container">
            <Hero />
            <ProjectsList />
        </div>
        <Footer />
        </>
    )
}

export default Home