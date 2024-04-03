import { WorkAuthors, WorkCardContainer, WorkTitle } from './styles'

type Props = {
  title: string
  authors: string[]
}

const WorkCard = ({ authors, title }: Props) => {
  return (
    <WorkCardContainer>
      <WorkTitle cy-data = 'workCard-title'>{title}</WorkTitle>
      <WorkAuthors>{authors.join(', ')}</WorkAuthors>
    </WorkCardContainer>
  )
}

export default WorkCard