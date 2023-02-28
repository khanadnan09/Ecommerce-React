import React from 'react'
import styled from 'styled-components'
import ImageArea from '../SignUpComp/ImageArea'
import SignUpForm from '../SignUpComp/SignUpForm'

const SignUp = () => {
  return (
    <Conatiner>
      <ImageArea />
      <SignUpForm />
    </Conatiner>
  )
}
const Conatiner = styled.div`
   background-color: #fff;
   height: 100%;
   display: flex;
   overflow: hidden;
`
export default SignUp