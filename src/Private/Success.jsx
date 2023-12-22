import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { checkAuthentication } from '../UIComponents/NavBar/auth'

function Success() {

    useEffect(()=>{
        console.log(checkAuthentication)
    })

  return (
    <>
       <Container>

       <Typography variant='h2'>
            Payment is successful
        </Typography>
        <Typography variant='h6'>
            Redirecting to your orders
        </Typography>

       </Container>
    </>
  )
}

export default Success