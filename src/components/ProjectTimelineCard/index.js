// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {details} = props
  const {projectTitle, description, projectUrl, duration, imageUrl} = details

  return (
    <div className="project-app-container">
      <img src={imageUrl} className="image" alt="project" />
      <div className="app-content">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="app-section">
          <AiFillCalendar className="calender-icon" />
          <p className="duration-time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
