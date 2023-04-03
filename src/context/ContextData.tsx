import { createContext, useReducer } from "react";
import { Children, HeroSectionData } from "../types";
import { reducer } from "./Reducer";

type InitialValue = {
    name: string,
    img: string
}

export const ContextApp = createContext({} as HeroSectionData)

const initialState: InitialValue = {
    name: '',
    img: ''
}

export const ContextAppProvider = ({children}: Children) => {

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: 'Gabriel',
                img: 'https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/hero.svg'
            }
        })
    }

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: 'Gabriel',
                img: 'https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/about1.svg'
            }
        })
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ContextApp.Provider value={{...state, updateAboutPage, updateHomePage}}>
            {children}
        </ContextApp.Provider>
    )
}