import React from 'react'
import styled from 'styled-components'
const CartTotals = () => {
    return (
        <TotalContainer>
            <Total>
                <Head>Cart Totals</Head>
                <List>Cart Subtotal<span>₹1,39,904</span></List>
                <List>Shipping<span>Free Shipping</span></List>
                <List>Total<span>₹1,39,904</span></List>
                <Buttons>
                    <button>Continue Shopping</button>
                   <button>Proceed To Checkout</button>
                </Buttons>
            </Total>
        </TotalContainer>
    )
}
const TotalContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 24px;
    margin: 40px 0;
`
const Total = styled.div`
    background-color: #fff;
    width: 380px;
    min-width: 200px;
    box-shadow: 5px 5px 15px #e3e3e3, -5px -5px 15px #ffffff;
    border: 1px solid #0000000f;
`
const Head = styled.div`
     background-color: #000;
     color: #fff;
     padding:10px 12px;
     color: #fff;
     text-align: center;
     font-size: 20px;
`
const List = styled.div`
    padding: 10px 12px;
    border-bottom: 1px solid #e9e9e9;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    span{
        font-size: 12px;
        background-color: #000;
        color: #fff;
        padding: 5px 15px;
        border-radius: 50px;
    }
`
const Buttons = styled.div`
   display: flex;
   flex-wrap: wrap;
   padding: 12px;
   button{
        color: #fff !important;
        border: none;
        padding: 7px 17px;
        font-size: 13px;
        flex: auto;
        cursor: pointer;
        margin: 7px 1px 5px 9px;
        border-radius: 1rem;
        @media screen and (max-width:400px) {
            margin: 10px 10px 0px 10px;
            padding:10px 17px;
        }
   }
    button:nth-child(1){
        background-color: #000;
        box-shadow: rgb(70 69 66 / 73%) 0px 2px 6px -1px;
    }
    button:nth-child(2){
        background-color: var(--primary-color);
        box-shadow: rgb(70 69 66 / 73%) 0px 2px 6px -1px;
    }
`
export default CartTotals