import { useContext, useEffect } from "react";
import { HeroSection } from "../components"
import { ContextApp } from "../context";

export const About = () => {

    const { updateAboutPage } = useContext(ContextApp)

    useEffect(() => {
        updateAboutPage()
    }, []);

    
    return (
        <>
            <HeroSection/>
        </>
    )
}
