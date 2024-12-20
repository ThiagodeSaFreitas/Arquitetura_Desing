import { useContext, useState, useEffect } from 'react'
import './ProjectsList.css'
import LikeFilled from '../../assets/likeFilled.svg'
import Like from '../../assets/like.svg'
import { getApiData } from '../../services/apiServices'
import { AppContext } from '../../contexts/AppContext';

function ProjectsList() {

  const [projects, setProjects] = useState([])
  const appContext = useContext(AppContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData('projects');
        setProjects(projectsResponse);
      } catch {
        setProjects([]);
      }
    }
    fetchData()
  }, [])

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>
        {appContext.languages[appContext.language].projects.subtitle}
        </p>
      </div>
      <div className="projects-grid">

        {
            projects ?
            projects.map((project) => (
        <div
            className="project-card d-flex jc-center al-center fd-column"
            key={project.id}
          >
            <div
              className="thumb tertiary-background"
              style={{ backgroundImage: `url(${project.thumb})` }}
            ></div>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            <img src={LikeFilled} height="20px" />
          </div>
        ))
        : null
        }
      </div>
    </div>
  );
}

export default ProjectsList;