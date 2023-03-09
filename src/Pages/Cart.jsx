import React from 'react'
import NavBar from '../Components/NavBar'
import TopNav from '../Components/TopNav'
import Breadcrumb from '../Components/Breadcrumb'
import Footer from '../Components/Footer'
import CartTable from '../Components/CartTable'
import CartTotals from '../Components/CartTotals'

const Cart = () => {
  return (
    <>
    <TopNav />
    <NavBar/>
    <Breadcrumb/>
    <CartTable/>
    <CartTotals/>
    <Footer/>
  </>
  )
}

export default Cart