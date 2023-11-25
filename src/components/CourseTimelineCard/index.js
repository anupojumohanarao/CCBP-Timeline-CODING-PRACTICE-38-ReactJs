// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {details} = props
  const {duration, description, courseTitle, tagsList} = details

  return (
    <div className="main-app-container">
      <div className="main-app-content">
        <h1 className="main-course-title">{courseTitle}</h1>
        <div className="duration-section-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration-time">{duration}</p>
        </div>
      </div>
      <p className="main-description">{description}</p>
      <div className="main-technologies-container">
        {tagsList.map(item => (
          <p className="tag-items">{item.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimeLineCard
