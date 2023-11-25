// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimeLineCard from '../ProjectTimelineCard'
import CourseTimeLineCard from '../CourseTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCardSection = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimeLineCard details={item} key={item.id} />
    }
    return <ProjectTimeLineCard details={item} key={item.id} />
  }

  return (
    <div className="main-app-container">
      <div className="app-section">
        <h1 className="my-journey-heading">
          MY JOURNEY OF <br />
          <span className="span-head">CCBP 4.0</span>
        </h1>
        <div className="chrono-section">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            slideShow
          >
            {timelineItemsList.map(eachItems =>
              renderTimeLineCardSection(eachItems),
            )}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimeLineView
