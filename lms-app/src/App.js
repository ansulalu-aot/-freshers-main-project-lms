import React, { useState , createContext } from 'react'
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

const BookContext = createContext();
const StudentContext = createContext()
const IssueContext = createContext()

function App() {

  const [book, setBook] = useState([]);
  const [student, setStudent] = useState([])
  const [issue, setIssue] = useState([])

  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123"
  }
  const [, setUser] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const [check, setCheck] = useState(false);
  const Login = details => {
    console.log(details)
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("logged in")
      setCheck(true)
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
      <BookContext.Provider value={[book, setBook]}><StudentContext.Provider value={[student, setStudent]}><IssueContext.Provider value={[issue, setIssue]}>
      <Router>
        {!check && (
          <LoginForm
            Login={Login} error={error}
            check={check}
            setCheck={setCheck}
          />
        )}

        <div className="d-flex">
          {check && <Dashboard />}
          <Routes>
            <Route path="/issuedbooks" element={check && <Issuedbooks />} />
            <Route path="/allbooks" element={check && <Allbooks />} />
            <Route path="/students" element={check && <Students />} />
          </Routes>
        </div>
      </Router>
      </IssueContext.Provider></StudentContext.Provider></BookContext.Provider>
    </div>
  )
}
export default App
export {BookContext}
export {StudentContext}
export {IssueContext}