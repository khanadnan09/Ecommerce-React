import React from 'react'
import styled from 'styled-components'
import ProdDesc from './ProdDesc'
import ProductDisplay from './ProductDisplay'
const ProductDetail = () => {
  return (
    <ProductDetails>
      <ProductDisplay/>
      <ProdDesc/>
    </ProductDetails>
  )
}
const ProductDetails = styled.div`
  background-color: #fff;
  margin: 25px auto;
  width: 96.5%;
  display: flex;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 4px;
  padding: 20px;
  @media screen  and (max-width:1070px) {
     flex-direction: column;
   }
`
export default ProductDetail