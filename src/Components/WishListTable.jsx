import React from 'react'
import styled from 'styled-components'
import { HiShoppingCart } from 'react-icons/hi';
import { TiEye } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
const WishListTable = () => {
    return (
        <>
            <TableConatiner>
                <table>
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Availiblity</th>
                            <th>Add To Cart</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/Laptop-224x197.jpg" alt="productImage" />
                            </td>
                            <td>
                                <span>
                                    <p style={{ marginBottom: "10px" }}>HP All-in-One</p>
                                    <p style={{ marginBottom: "5px" }}><span>color : </span>Blue</p>
                                    <p>View <TiEye /></p>
                                </span>
                            </td>
                            <td>₹1,40,000</td>
                            <td>March,28,2020</td>
                            <td><span className='success'>In stock</span></td>
                            <td><button>Add To Cart<HiShoppingCart /></button></td>
                            <td><RxCross2 /></td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://clothingadmin.netlify.app/images/3764897a.jpg" alt="productImage" />
                            </td>
                            <td>
                                <span>
                                    <p style={{ marginBottom: "10px" }}>Rust-pure-cotton-striped-shirt-by-nologo</p>
                                    <p style={{ marginBottom: "5px" }}><span>color : </span>Orange</p>
                                    <p style={{ marginBottom: "5px" }}><span>Size : </span>Small</p>
                                    <p>View <TiEye /></p>
                                </span>
                            </td>
                            <td>₹4,000</td>
                            <td>March,20,2020</td>
                            <td><span className='danger'>Out of stock</span></td>
                            <td><button>Add To Cart<HiShoppingCart /></button></td>
                            <td><RxCross2 /></td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://www.apple.com/v/airpods/shared/compare/b/images/compare/compare_airpods_max__b14s2x6q07rm_large.png" alt="productImage" />
                            </td>
                            <td>
                                <span>
                                    <p style={{ marginBottom: "10px" }}>AirPods Max</p>
                                    <p style={{ marginBottom: "5px" }}><span>color : </span>White</p>
                                    <p>View <TiEye /></p>
                                </span>
                            </td>
                            <td>₹39,000</td>
                            <td>February,9,2020</td>
                            <td><span className='danger'>Out of stock</span></td>
                            <td><button>Add To Cart<HiShoppingCart /></button></td>
                            <td><RxCross2 /></td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=490&hei=500&fmt=jpeg&qlt=95&.v=1625868688000" alt="productImage" />
                            </td>
                            <td>
                                <span>
                                    <p style={{ marginBottom: "10px" }}>iMac 24''</p>
                                    <p style={{ marginBottom: "5px" }}><span>color : </span>White</p>
                                    <p>View <TiEye /></p>
                                </span>
                            </td>
                            <td>₹1,40,000</td>
                            <td>February,2,2020</td>
                            <td><span className='success'>In stock</span></td>
                            <td><button>Add To Cart<HiShoppingCart /></button></td>
                            <td><RxCross2 /></td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/air-cooler/w/a/b/-original-imaghnyqahpscfmk.jpeg?q=70" alt="productImage" />
                            </td>
                            <td>
                                <span>
                                    <p style={{ marginBottom: "10px" }}>Hindware 85 L Desert Air Cooler</p>
                                    <p style={{ marginBottom: "5px" }}><span>color : </span>White</p>
                                    <p>View <TiEye /></p>
                                </span>
                            </td>
                            <td>₹9,199</td>
                            <td>January,30,2020</td>
                            <td><span className='success'>In stock</span></td>
                            <td><button>Add To Cart<HiShoppingCart /></button></td>
                            <td><RxCross2 /></td>
                        </tr>
                    </tbody>
                </table>

            </TableConatiner>
            <Button>
                <button>Continue Shopping</button>
                <button>Go To Cart</button>
            </Button>
        </>
    )
}
const TableConatiner = styled.div`
   margin: 30px auto;
   width: 96.5%;
   overflow: auto;
   table{
    width: 100%;
    background-color: #fff;
    border-spacing: 0;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
   }
   th{
    padding: 12px 0;
    background-color: #000;
    color: #fff;
    font-weight: 400;
    font-size: 13px;
    text-align: left;
    text-align: center;
   }
   td{
    border-bottom: 1px solid #efefef;
    padding: 10px 0px;
    text-align: center;
    @media screen and (max-width:1200px){
        min-width: 125px;
    }
   }
   td:first-child{
    display: flex;
    justify-content: center;
   }
   td:nth-child(2){
    @media screen and (max-width:1200px){
        min-width: 220px;
    }
    span{
        p{
            font-size: 13px;
            font-weight: 400;
            span{
                font-weight: bold;
            }
        }
        p:last-child{  
            margin: 9px auto 0 auto;
            background-color: #000;
            width: fit-content;
            padding: 3px 9px;
            font-size: 11px;
            color: #ffffff;
            cursor: pointer;
            display: flex;
            align-items: center;
            font-weight: 500;
            svg{
                margin-left: 6px;
                font-size: 15px;
            }
        }
    }
   }
   td:nth-child(2),td:nth-child(3),td:nth-child(4){
    font-size: 13px;
    font-weight: 500;
   }
   td:nth-child(6){
    button{
        display: flex;
        margin: auto;
        align-items: center;
        cursor: pointer;
        background-color: var(--primary-color);
        color: #fff;
        padding: 7px 12px;
        font-size: 13px;
        border: none;
        border-radius: 0.2rem;
        box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-color);
        svg{
            margin-left: 5px;
            font-size: 15px;
        }
    }
    @media screen and (max-width:1200px){
        min-width: 150px;
    }
   }
   td:nth-child(7){
    svg{
        color: #fff;
        cursor: pointer;
        background-color: var(--primary-color);
        padding: 9px;
        height: 36px;
        width: 36px;
        border-radius: 50%;
        box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-color);
    }
   }

    img{
        height: 110px;
        width: 110px;
        object-fit: contain;
        margin-right: 10px;
    }
`
const Button = styled.div`
    margin: 30px 0;
    text-align: center;
    button{
        border: none;
        color: #fff;
        padding: 7px 17px;
        background-color: #f7a518;
        box-shadow: #f7a5188c 0px 2px 8px 0px;
        font-size: 14px;
        margin-right: 10px;
        cursor: pointer;
        :nth-child(2){
            background-color: #000;
            box-shadow: #464542ba 0px 2px 8px 0px;
        }
    }
`
export default WishListTable