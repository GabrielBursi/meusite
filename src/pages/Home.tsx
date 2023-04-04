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
            <HeroSection/>
            <Services/>
            <Contact/>
        </>
    )
}
