import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import './LandingPage.css'
import Login from './Login'
export default function LandingPage() {
  const myStyle={
   
  }
  const btnStyle={

  }
  return (
 <>
{/*
<div className="container"  >

<h1>Landing Page</h1>
<p>Login or Sign Up to get Started</p>
<div className="btnDiv">

<Button variant='contained' type='submit' className='btn' >
<Link to='/gotoLogin' className='btnLink' >Goto Login</Link>
</Button>
<br />
<Button variant='contained' className='btn'  >

<Link to='/gotoSignUp' className='btnLink' >Goto Sign Up</Link>
</Button>
</div>

</div> */}
<Login />

</>
    )
}
