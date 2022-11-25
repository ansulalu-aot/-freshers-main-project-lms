import React, { useState } from 'react'
import Lmsheader2 from "./Vector (1).png"

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: "" })
    const submitHandler = (e) => {
        e.preventDefault()
        Login(details)
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
                        <a href='/Admin' style={{ textDecoration: "none" }}>Admin</a>
                        <a href='/Student' style={{ textDecoration: "none" }}>Student</a>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" name='email' id='email' placeholder="Enter your email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
                        {/* {error? <label style={{color: "red"}} >Email is not valid</label> : ""} */}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name='password' id='password' placeholder="Enter your password" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
                        {error ? <label style={{color: "red"}} >Incorrect password </label> : (details.password.length < 8 && details.password.length >1) ?  <label style={{color: "red"}} >Password should have 8 characters</label> : ""}
                    </div>
                    <input type='submit' value="Login" />
                </div>
            </form>
            
        </>
    )
}

export default LoginForm
