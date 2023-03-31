import { HeroSection } from "../components"
import { HeroSectionData } from "../types"

export const Home = () => {

    const data: HeroSectionData = {
        img: 'https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/hero.svg',
        name: 'Gabriel'
    }

    return (
        <>
            <HeroSection {...data}/>
        </>
    )
}
