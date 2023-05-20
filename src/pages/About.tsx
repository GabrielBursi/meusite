import { HeroSection } from "../components"
import { ProjectsData } from "../types";
import { perfil } from "../images";

export const About = () => {

    const description = `
    Me chamo Gabriel, tenho 20 anos. Programador e apaixonado por tecnologia. Meu primeiro contato com programação foi há aproximadamente três anos atrás, desde lá tive algumas desanimadas no meio do caminho, mas há mais de um ano estou muito focado e me dedicando muito para aprendizagem, cada dia estou melhorando! 
    Além da paixão pela programação, sou um entusiasta da colaboração e do aprendizado contínuo. Sempre estou em busca de oportunidades para expandir meus conhecimentos e trabalhar em equipe, visando alcançar resultados excepcionais.
    Minha sede de conhecimento é insaciável, e estou sempre em busca de novas tecnologias e tendências do mercado. Essa curiosidade constante me impulsiona a me manter atualizado e a explorar soluções inovadoras para os desafios que encontro.
    Sou uma pessoa sociável e comunicativa. Valorizo a importância de estabelecer e manter relacionamentos profissionais saudáveis, baseados na confiança e no respeito mútuo.
    `

    const project: ProjectsData = {
        description,
        img: perfil.fotoAbout,
        name: "Gabriel",
        id: 1,
        link: '',
        technologies: []
    }
    
    return (
        <>
            <HeroSection
                showP
                project={project}
            />
        </>
    )
}
