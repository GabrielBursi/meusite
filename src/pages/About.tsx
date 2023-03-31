import { HeroSection } from "../components"
import { HeroSectionData } from "../types"

export const About = () => {

    const data: HeroSectionData = {
        img: 'https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/about1.svg',
        name: 'Gabriel 2'
    }
    
    return (
        <>
            <HeroSection {...data}/>
        </>
    )
}
