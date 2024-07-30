import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Projects from './components/Projects/Projects.jsx'
import Blogs from './components/Blogs/Blogs.jsx'

const Router =  createBrowserRouter ([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "contact-us",
        element: <ContactUs/>
      },
      {
        path: "about-us",
        element: <AboutUs/>
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path: "blogs",
        element: <Blogs/>
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
