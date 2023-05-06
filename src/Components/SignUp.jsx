import React, { Component, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik'
import { Button } from '@mui/material';
import { Input } from '@mui/material';
import './Style.css'
import { useNavigate } from 'react-router-dom'

const HigherOrderFunc = (ForNavigation) => {
    const ForwrdRef = React.forwardRef((props, ref) => {
        const Navigate = useNavigate()
        return <ForNavigation {...props} ref={ref} Navigate={Navigate} />
    })
    return ForwrdRef
}

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            Name: '',
            Email: '',
            Password: '',
        }

    }
    render() {
        // const navigate = useNavigate();
        const HandlePass = (e) => {
            // console.log(e.target.value)
            this.setState({ Password: e.target.value })
        }
        const HandleEmail = (e) => {
            // console.log(e.target.value)
            this.setState({ Email: e.target.value })
        }
        const HandleName = (e) => {
            this.setState({ Name: e.target.value })

        }
        let flag = false
        const SubmitFunc = (e) => {
            e.preventDefault()
            // console.log("submit")
            flag = true

            if (this.state.Email == '' || this.state.Password == '') {
                toast.warn('Enter Data', {
                    hideProgressBar: true,
                    pauseOnHover: true
                })
            }
            else if (flag == true) {
                toast.success('You have entered')
                    flag = true
                    console.log(this.props)
                    const { Navigate } = this.props
                    Navigate('/home')
                }
            }


            return (
                <>
                    {/* <div className="container"> */}

                    <h2>SignUp</h2>
                    <Formik>
                        <form action="">
                            <Input type="text" onChange={HandleName} placeholder='Enter Name' className='inputs' />
                            <br />
                            <Input type="Email" onChange={HandleEmail} placeholder='Enter Email' className='inputs' />
                            <br />
                            <Input type="Password" onChange={HandlePass} placeholder='Enter Password' className='inputs' />
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
                    {/* </div> */}

                </>
            )
        }
    }
// export default SignUp
export default HigherOrderFunc(SignUp)