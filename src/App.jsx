import React, { useEffect,useContext , useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

const [User, setUser] = useState(null)

// ye function check krega email or pass match ho bhi rhe hai
const handleLogin =(email,password) =>{
  if(email=='admin@me.com' && password=='123'){
    setUser('admin')
  }
  else if(email=='user@me.com' && password==123){
    setUser('employee')
  }
  else{
    alert('Invalid Credentials')
  }
}

const data= useContext(AuthContext)
console.log(data)

  return (
    <>
    {/* // means agr user nhi hai ya empty hai to login page khol do vrna empty */}
   {!User? <Login handleLogin={handleLogin}/>: ''} 
    {/* <EmployeeDashboard/> */}
    {User=='admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
