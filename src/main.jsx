import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ViewProject from './pages/ViewProject'
import AboutMe from './pages/AboutMe'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage.jsx';
import Hero from './component/Hero.jsx'

const router = createBrowserRouter([
  {
      path: "/Portofolio-2",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path: "/Portofolio-2/",
          element: <Hero/>,
          errorElement: <ErrorPage/>
        },
        {
          path: "/Portofolio-2/aboutme",
          element: <AboutMe/>,
          errorElement: <ErrorPage/>
        },
        {
          path: "/Portofolio-2/project",
          element: <ViewProject/>,
          errorElement: <ErrorPage/>
        },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
