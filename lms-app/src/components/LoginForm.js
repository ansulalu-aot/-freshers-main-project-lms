import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: "" })
    const submitHandler = (e) => {
        e.preventDefault()
        Login(details)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
                <p>Welcome back! Please enter your details.</p>
                <div className='form-tab'>
                    <a href='#Admin' style={{textDecoration:"none"}}>Admin</a>
                    <a href='#Student' style={{textDecoration:"none"}}>Student</a>
                </div>
                {(error !== "") ? (<div className='error'>{error}</div>) : ""}
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' id='email' placeholder="Enter your email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' id='password' placeholder="Enter your password" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type='submit' value="Login" />
            </div>
        </form>
    )
}

export default LoginForm
