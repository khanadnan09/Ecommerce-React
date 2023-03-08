import React from 'react'
import styled from 'styled-components'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <Section>
        <PageName>WishList</PageName>
        <BreadcrumbLinks>
          <Link to={"/"}>Home <MdKeyboardArrowRight/></Link>
          <Link to={"/"}>Shop <MdKeyboardArrowRight/></Link>
          <span>WishList</span>
        </BreadcrumbLinks>
    </Section>
  )
}
const Section = styled.div`
    background-color: #fff;
    padding: 20px 24px;   
    @media screen and (max-width:500px) {
      padding-left: 10px;
    }
`
const PageName = styled.div`
    font-size: 1.3rem;
    margin-bottom: 11px;
    font-weight: 500;
`
const BreadcrumbLinks = styled.div`
    padding: 7px 17px;
    display: flex;
    font-size: 0.9rem;
    background-color: #f3f3f3;
    border-radius: 0.3rem;
     a{
        display: flex;
        align-items: center;
        margin-right: 10px;
        font-weight: 500;
        color: #464646;
     }
    span {
        font-weight: 500;
        color: #959595;
    }
`
export default Breadcrumb