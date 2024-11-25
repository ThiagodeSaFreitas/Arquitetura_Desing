import Banner from "../components/Banner/Banner"
import Header from "../components/header/Header"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"


function Projects(){
    return(
        <>
        <Header />   
        <Banner title="Projects" image="imageProjects.jpg" />    
        <div className="container">   
            <ProjectsList />
        </div>
        <Footer />
        </>
    )
}

export default Projects