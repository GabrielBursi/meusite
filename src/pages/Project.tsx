import { useParams } from "react-router-dom"
import { HeroSection } from "../components"
import { projects } from "../utils"

export const Project = () => {

  const { id } = useParams<'id'>()
  const idToFind = Number(id)

  const [projectFind] = projects.filter(project => project.id === idToFind)

  return (
    <>
      <HeroSection
        project={projectFind}
        txtBtn="acessar"
        to={projectFind.link}
        showTechnologies
      />
    </>
  )
}
