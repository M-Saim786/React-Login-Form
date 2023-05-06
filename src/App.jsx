import React from 'react'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { Route , Routes ,Link, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import LandingPage from './Components/LandingPage'
import './App.css'
export default function App() {
let flag = false
  const AddActive=()=>{
    let btn1 = document.getElementById('btn1')
    let btn2 = document.getElementById('btn2')
if (btn1.classList.contains('active')) {
  btn1.classList.remove('active')
  btn2.classList.add('active')
}
else 
{
  btn2.classList.remove('active')
  btn1.classList.add('active')
}


  }

return (
<>
{/* Main Page  */}
{/* <LandingPage /> */}
  {/* <LandingPage  /> */}
  <div className="container">

  <div className="btns" id='btns'>
<button className='btn'  id='btn1' onClick={AddActive} >

<Link to={'/gotoLogin'} >GOTO LOGIN</Link>
</button>
<button className='btn' id='btn2' onClick={AddActive} >

<Link to={'/gotoSignUp'} >GOTO SINGUP</Link>
</button>
</div>
  
<Routes>
  <Route path='/gotoLogin' element={<Login/>}></Route>
  <Route path='/gotoSignUp' element={<SignUp/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
</Routes>
</div>

</>

    )
}
