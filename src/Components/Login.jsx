import { Formik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';
import { Input } from '@mui/material';
import './Style.css'
export default function Login() {
    const [Email, setEmail] = useState('')
    const [Pass, setPasss] = useState('')
    const navigate = useNavigate();
    const HandlePass = (e) => {
        console.log(e.target.value)
        setPasss(e.target.value)
    }
    const HandleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const SubmitFunc = (e) => {
        e.preventDefault()
        // console.log("submit")
        Email == '' || Pass == '' ? toast.warn('Enter Data'
            , {
                hideProgressBar: true,
                pauseOnHover: true
            }
        )

            : toast.success('You have entered')
        if (Email != '' && Pass != '') {
            navigate('/home');
        }
        // console.log(setEmail.value)

    }
    return (
        <>
            <div className="">

                <h1>Login Page</h1>

                <Formik>
                    <form action="">
                        <Input type="text" onChange={HandleEmail} placeholder='Enter Email' className='inputs' />
                        <br />
                        <Input type="text" onChange={HandlePass} placeholder='Enter Password' className='inputs' />
                        <p></p>
                        <br />
                        <Button variant='contained' type='submit' onClick={(e) => SubmitFunc(e)}>
                            Submit
                        </Button>
                    </form>

                </Formik>
                {/* <div>Login</div> */}

                {/* <Home /> */}
                {/* <Link to='/home'>
                Goto Home
            </Link> */}
                <ToastContainer />
            </div>

        </>
    )
}
