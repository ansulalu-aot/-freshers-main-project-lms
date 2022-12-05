import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';
import { StudentContext } from '../App';
import Lmsheader2 from "./Vector (1).png"

function LoginForm() {
    const [details, setDetails] = useState({ email: "", password: "" })
    const [studentLogin, setStudentLogin] = useState(false)
    const [student] = useContext(StudentContext)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const adminUser = {
        email: "admin@gmail.com",
        password: "admin123"
    }
    const Login = () => {
        if (details.email === adminUser.email && details.password === adminUser.password) {
            navigate("/Issuedbooks")
            toast.success('Login successfully', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            })
        } else {
            setError(true)
            toast.error('Invalid username or password', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            })
        }
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (!studentLogin) {
            Login()
        }
        else if (studentLogin) {
            studentSubmit(e)
        }
        else {
            setError(true)
        }
    }
    const loginStudent = () => {
        student.find((item) => {
            if (details.email === item.email && details.password === item.password) {
                navigate("/students/mybook")
            }
        })
    }
    const studentSubmit = () => {
        loginStudent()
    }

    return (
        <>
            <div className='d-flex m-5'>
                <img src={Lmsheader2} alt="LMS" style={{ width: "45px", height: "51.37px" }} />
                <h1 className='px-3' style={{ width: "50px", height: "50px", color: "#ED7966" }}>LMS</h1>
            </div>
            <form className="form" onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Login</h2>
                    <p>Welcome back! Please enter your details.</p>
                    <div className='form-tab'>
                        <p className='d-flex gap-5'><label onClick={() => { setStudentLogin(false) }} style={{ borderBottom: !studentLogin ? "3px solid #ED7966" : "none" }}>Admin</label>
                            <label onClick={() => { setStudentLogin(true) }} style={{ borderBottom: studentLogin ? "3px solid #ED7966" : "none" }}>Student</label></p>

                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" name='email' id='email' placeholder="Enter your email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
                        {/* {error? <label style={{color: "red"}} >Email is not valid</label> : ""} */}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name='password' id='password' placeholder="Enter your password" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
                        {error ? <label style={{ color: "red" }} >Incorrect password </label> : (details.password.length < 8 && details.password.length > 1) ? <label style={{ color: "red" }} >Password should have 8 characters</label> : ""}
                    </div>
                    <input type='submit' value="Login" />
                    <br />
                    {studentLogin && (
                        <label className='d-flex justify-content-center py-3 loginfoot' style={{color: "#646464"}}>Don't have an account? {""}
                        <a style={{ color: "#ED7966", textDecoration: "none" }} href="register"> Register</a></label>
                    )}
                </div>
            </form>

        </>
    )
}
export default LoginForm
