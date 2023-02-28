import React from 'react'
import styled from 'styled-components'

const OfferStrip = ({name,price,img}) => {
   return (
      <Offerstrip>
         <ContainerText>
            <New>New</New>
            <Name>{name}</Name>
            <Price>{price}</Price>
            <ShopNow>Shop Now</ShopNow>
         </ContainerText>
         <img src={img} alt="imgOffer" />
      </Offerstrip>
   )
}
const Offerstrip = styled.div`
   background-color : #000;
   display: flex;
   color: #fff;
   img{
    flex: 1;
    padding-right: 50px;
    transition: 450ms;
    transform: scale(.9);
   }
   :hover img{
      transform: scale(1.1);
   }
   @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
      padding: 30px 0;
      img{
           padding-right: 0;
         }
      :hover img{
          transform: scale(1.02);
        }
    }
`
const ContainerText = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    @media screen and (max-width: 768px) {
      padding: 0 20px 30px 30px;
    }
`
const New = styled.div`
   margin-bottom: 10px;
   color: var(--primary-color);
   font-weight: 600;
`
const Name = styled.div`
   margin-bottom: 10px;
   font-size: 1.5rem;
   font-weight: 600;
`
const Price = styled.div`
   margin-bottom: 10px;
   line-height: 30px;
   font-size: 1.2rem;
   max-width: 700px;
   font-weight: 200;
   @media screen and (max-width: 768px) {
     font-size: 1rem;
    }
`
const ShopNow = styled.button`
  border: 0px;
  font-size: 1rem;
  background-color: var(--primary-color);
  width: fit-content;
  padding: 12px ;
  margin-top: 10px;
  cursor: pointer;
`
export default OfferStrip