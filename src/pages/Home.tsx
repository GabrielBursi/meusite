import { HeroSection } from "../components"
import { Services } from "./Services"
import { Contact } from "./Contact"
import { ProjectsData } from "../types"
import { perfil } from "../images"
import { Technologies } from "./Technologies"

export const Home = () => {

    const description = `
    Bem-vindo ao meu mundo digital! Me chamo Gabriel e sou um desenvolvedor apaixonado por tecnologia. Com meus 20 anos de idade, estou constantemente explorando o universo da programação e buscando novos desafios.
    Como um dev FullStack, estou focado principalmente na stack de JavaScript, aproveitando ao máximo suas poderosas ferramentas e recursos.Ao longo da minha jornada, aprimorei minhas habilidades em uma variedade de tecnologias, mas hoje em dia, minhas principais são: Typescript, React, Next.js, Node.js, Express e API.
    Neste site, você encontrará uma seleção dos meus projetos mais recentes e exemplos do meu trabalho. Sinta-se à vontade para explorar e entrar em contato comigo caso queira discutir possíveis colaborações ou apenas trocar ideias.
    `

    const project: ProjectsData = {
        description,
        img: perfil.fotoHome,
        name: "Gabriel",
        id: 1,
        link: '',
        technologies: []
    }

    return (
        <>
            <HeroSection project={project}/>
            <Services/>
            {/* <Technologies/> */}
            <Contact/>
        </>
    )
}
