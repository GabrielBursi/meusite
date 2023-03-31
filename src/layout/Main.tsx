import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

export const Main = () => {
    return (
        <>
        <Header/>
            <Outlet/>
        <Footer/>
        </>
    )
}
