import React from 'react'
import styled from 'styled-components'

const PinCode = () => {
  return (
    <PinCodeContainer>
      <Head>Select Delivery Location</Head>
      <Text>Enter the pincode of your area to check product availability and delivery options.</Text>
       <Input><input type="text" placeholder='Enter Pincode' /><span>Check</span></Input>  
    </PinCodeContainer>
  )
}
const PinCodeContainer = styled.div`
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 20px;
    border-radius: 4px;
    background-color: #fff;
    height: fit-content;
    position: sticky;
    top: 0px;
`
const Head = styled.div`
    font-size: 1.4rem;
    margin-bottom: 7px;
`
const Text = styled.div`
   font-size: 13px;
   line-height: 20px;
`
const Input = styled.div`
    position: relative;
    margin-top: 20px;
      input{
        height: 34px;
        width: 100%;
        border: 0px solid #191919;
        border-radius: 0.3rem;
        padding: 20px 76px 20px 20px;
        font-size: 14px;
        background-color: #f3f3f3;
      }
      span{
        height: 100%;
        cursor: pointer;
        position: absolute;
        right: 0px;
        font-size: 13px;
        background-color: #000;
        border-bottom-right-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        color: #ffffff;
        padding: 12px;
      }
`
export default PinCode