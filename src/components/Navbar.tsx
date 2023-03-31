import { NavLink } from "react-router-dom"

export const Navbar = () => {

    const navItems: string[] = ['home', 'about', 'services', 'contact']

    return (
        <nav>
            <div>
                <ul>
                    {navItems.map(item => (
                        <li key={item}>
                            <NavLink to={item}>
                                {item[0].toUpperCase() + item.substring(1)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
