import React from 'react'
import NavBar from '../Components/NavBar'
import TopNav from '../Components/TopNav'
import Breadcrumb from '../Components/Breadcrumb'
import WishListTable from '../Components/WishListTable'
import Footer from '../Components/Footer'
const WishList = () => {
  return (
    <>
      <TopNav />
      <NavBar/>
      <Breadcrumb/>
      <WishListTable/>
      <Footer/>
    </>
  )
}

export default WishList