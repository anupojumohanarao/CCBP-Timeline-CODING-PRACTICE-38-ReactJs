// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectCardContainer,
  ProjectImage,
  ProjectTitleAndDurationContainer,
  ProjectTitle,
  DurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
} from './styledComponents'

const ProjectTimelineCard = props => {
  const {details} = props
  const {imageUrl, projectTitle, description, projectUrl, duration} = details

  return (
    <ProjectCardContainer>
      <ProjectImage src={imageUrl} alt="project" />
      <ProjectTitleAndDurationContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <DurationContainer>
          <AiFillCalendar color="#171f46" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </ProjectTitleAndDurationContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <VisitLink href={projectUrl}>Visit</VisitLink>
    </ProjectCardContainer>
  )
}

export default ProjectTimelineCard
