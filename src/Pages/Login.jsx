import React from 'react'
import LoginForm from '../LogInComp/LoginForm'
import styled from 'styled-components'
import ImageArea from '../LogInComp/ImageArea'

const Login = () => {
    return (
        <Conatiner> 
          <LoginForm />
          <ImageArea/>
        </Conatiner>
    )
}
const Conatiner = styled.div`
   background-color: #fff;
   height: 100%;
   display: flex;
   overflow: hidden;
`
export default Login