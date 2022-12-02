import React, { useState, createContext, useEffect } from 'react'
import {
  Route,
  Routes
} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import LoginForm from './components/LoginForm'
import Issuedbooks from './Dashboard/Issuedbooks';
import Students from './Dashboard/Students';
import Allbooks from './Dashboard/Allbooks';
import View from './Dashboard/View';
import Mybooks from './Dashboard/Mybooks';
import Studentallbooks from './Dashboard/Studentallbooks';

const BookContext = createContext();
const StudentContext = createContext()
const IssueContext = createContext()

const getStudent = () => {
  const student = localStorage.getItem('student')
  if (student) {
    return JSON.parse(localStorage.getItem('student'))
  } else {
    return []
  }
}
const getBook = () => {
  const book = localStorage.getItem('book')
  if (book) {
    return JSON.parse(localStorage.getItem('book'))
  } else {
    return []
  }
}
const getIssue = () => {
  const issue = localStorage.getItem('issue')
  if (issue) {
    return JSON.parse(localStorage.getItem('issue'))
  } else {
    return []
  }
}

function App() {
  const [book, setBook] = useState(getBook());
  const [student, setStudent] = useState(getStudent())
  const [issue, setIssue] = useState(getIssue())

  // const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  useEffect(() => {
    localStorage.setItem('book', JSON.stringify(book))
    localStorage.setItem('student', JSON.stringify(student))
    localStorage.setItem('issue', JSON.stringify(issue))
  }, [book, student, issue])

  // const adminUser = {
  //   email: "admin@gmail.com",
  //   password: "admin123"
  // }
  // const [, setUser] = useState({ email: "", password: "" })
  // const [error, setError] = useState(false)
  // const [check, setCheck] = useState(false);
  // const Login = details => {
  //   if (details.email === adminUser.email && details.password === adminUser.password) {
  //     setCheck(true)
  //     setUser({
  //       email: details.email,
  //       password: details.password
  //     })
  //     setError(true)
  //     navigate("/Issuedbooks")
  //     toast.success('Login successfully', {
  //       position: "top-right",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light"
  //     })
  //   } else {
  //     setError(true)
  //     toast.error('Invalid username or password', {
  //       position: "top-right",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light"
  //     })
  //   }
  // }

  return (
    <div>
      <BookContext.Provider value={[book, setBook]}><StudentContext.Provider value={[student, setStudent]}><IssueContext.Provider value={[issue, setIssue]}>
        <Routes>
          <Route path='/' element={<LoginForm  />} />
          <Route path='/issuedbooks' element={<Issuedbooks />} />
          <Route path='/allbooks' element={<Allbooks />} />
          <Route path='/students' element={<Students />} />
          <Route path='/students/:studentid' element={<View />} />
          <Route path='/students/mybook' element={<Mybooks />} />
          <Route path='/students/studentallbooks' element={<Studentallbooks />} />
        </Routes>
      </IssueContext.Provider></StudentContext.Provider></BookContext.Provider>
      <ToastContainer />
    </div>
  )
}
export default App
export { BookContext }
export { StudentContext }
export { IssueContext }