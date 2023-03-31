import { NavLink } from "react-router-dom"
import { Navbar } from "./Navbar"

export const Header = () => {
    return (
        <header>
            <NavLink to='/'>
                <img alt="" src=""/>
            </NavLink>
            <Navbar/>
        </header>
    )
}
