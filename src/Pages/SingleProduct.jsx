import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import NavBar from '../Components/NavBar'
import TopNav from '../Components/TopNav'
import ProdReview from '../SingleProdComp/ProdReview'
import ProductDetail from '../SingleProdComp/ProductDetail'
import Footer from '../Components/Footer'

const SingleProduct = () => {
  return (
    <>
      <TopNav/>
      <NavBar/>
      <Breadcrumb/>
      <ProductDetail/>
      <ProdReview/>
      <Footer/>
    </>
  )
}

export default SingleProduct