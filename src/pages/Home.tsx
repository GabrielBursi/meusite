import { useContext, useEffect } from "react"
import { HeroSection } from "../components"
import { ContextApp } from "../context"

export const Home = () => {

    const { updateHomePage } = useContext(ContextApp)

    useEffect(() => {
        updateHomePage()
    }, []);

    return (
        <>
            <HeroSection/>
        </>
    )
}
