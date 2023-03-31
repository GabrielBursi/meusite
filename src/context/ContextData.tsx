import { createContext } from "react";
import { Children, HeroSectionData } from "../types";

export const ContextApp = createContext({} as HeroSectionData[])

export const ContextAppProvider = ({children}: Children) => {

    const data: HeroSectionData[] = [
        {
            img: '',
            name: ''
        }
    ]

    return (
        <ContextApp.Provider value={data}>
            {children}
        </ContextApp.Provider>
    )
}