import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import Issuedbooks from './Dashboard/Issuedbooks';
import Students from './Dashboard/Students';
import Allbooks from './Dashboard/Allbooks';

function App() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123"
  }
  const [, setUser] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [authCheck, setauthCheck] = useState(false);
  const Login = details => {
    console.log(details)
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("logged in")
      setauthCheck(true)
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
    <div>
      <Router>
        {!authCheck && (
          <LoginForm
            Login={Login} error={error}
            authCheck={authCheck}
            setauthCheck={setauthCheck}
          />
        )}

        <div className="d-flex">
          {authCheck && <Dashboard />}
          <Routes>
            <Route path="/students" element={authCheck && <Students/>} />
            <Route path="/allbooks" element={authCheck && <Allbooks/>} />
            <Route path="/issuedbooks" element={authCheck && <Issuedbooks />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
export default App
