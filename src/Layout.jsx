import React from 'react'
import  Header from './components/elements/Header'
import Footer from './components/elements/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout