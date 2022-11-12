import React, { useState } from 'react'
import LoginForm from './components/LoginForm'

function App() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123"
  }
  const [user, setUser] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details)
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("logged in")
      setUser({
        email: details.email,
        password: details.password
      })
    } else {
      console.log("details not match")
      setError("details not match")
    }
  }
  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className='welcome'>
          
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  )
}
export default App
