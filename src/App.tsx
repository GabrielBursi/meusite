import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Main } from "./layout"
import { About, Contact, Error, Home, Services } from "./pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home/>,
        errorElement: <Error/>
      },
      {
        path: '/about',
        element: <About/>,
        errorElement: <Error/>
      },
      {
        path: '/contact',
        element: <Contact />,
        errorElement: <Error />
      },
      {
        path: '/services',
        element: <Services />,
        errorElement: <Error />
      }
    ]
  },
  {
    path: '*',
    errorElement: <Error/>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
