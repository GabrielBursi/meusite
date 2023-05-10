import { useContext, useEffect } from "react"
import { HeroSection } from "../components"
import { ContextApp } from "../context"
import { Services } from "./Services"
import { Contact } from "./Contact"

export const Home = () => {

    const { updateHomePage } = useContext(ContextApp)

    useEffect(() => {
        updateHomePage()
    }, []);

    return (
        <>
            <HeroSection
                description="Me chamo Gabriel, tenho 20 anos. Estudante de Eng. De Software, programador e apaixonado por tecnologia. Um dev. FullStack focado na stack de JavaScript."
                img="https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/hero.svg"
            />
            <Services/>
            <Contact/>
        </>
    )
}
