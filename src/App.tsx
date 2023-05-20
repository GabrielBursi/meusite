import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Main } from "./layout"
import { About, Contact, ErrorComponent, Home, Project, Services, Technologies } from "./pages"
import { GlobalStyle } from "./GlobalStyle";
import { GoToTop } from "./components";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    errorElement: <ErrorComponent/>,
    children: [
      {
        index: true,
        element: <Home/>,
        errorElement: <ErrorComponent/>
      },
      {
        path: '/sobre',
        element: <About/>,
        errorElement: <ErrorComponent/>
      },
      {
        path: '/projetos',
        element: <Services />,
        errorElement: <ErrorComponent />
      },
      // {
      //   path: '/tecnologias',
      //   element: <Technologies />,
      //   errorElement: <ErrorComponent />
      // },
      {
        path: '/projeto/:id',
        element: <Project />,
        errorElement: <ErrorComponent />
      },
      {
        path: '/contato',
        element: <Contact />,
        errorElement: <ErrorComponent />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorComponent/>,
  }
])

function App() {

  const theme: DefaultTheme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <GoToTop/>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
