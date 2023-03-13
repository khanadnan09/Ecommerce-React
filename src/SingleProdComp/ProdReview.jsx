import React from 'react'
import styled from 'styled-components'
import PinCode from './PinCode'
import Review from './Review'
import AboutProduct from './AboutProduct'
const ProdReview = () => {
  return (
    <ProductReview>
      <Review />
      <Container>
        <PinCode />
        <AboutProduct />
      </Container>

    </ProductReview>
  )
}
const ProductReview = styled.div`
    margin: 25px auto;
    width: 96.5%;
    display: flex;
    @media screen  and (max-width:700px) {
      flex-direction: column;
    }
`
const Container = styled.div`
    flex: 1.3;
    @media screen  and (max-width:992px) {
      flex: 2;
    }
`
export default ProdReview