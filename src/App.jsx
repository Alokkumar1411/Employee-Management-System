import React, { useEffect,useContext , useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const Authdata= useContext(AuthContext)
  const [loggedInUserData, setloggedInUserData] = useState(null)
const [User, setUser] = useState(null)

// useEffect(() => {
//   if(Authdata){
//     const loggedInUser =JSON.parse(localStorage.getItem("loggedInUser")) 
//     if(loggedInUser){
//       setUser(loggedInUser)
//     }

//   }

  
// }, [Authdata])
// console.log(User)


// ye function check krega email or pass match ho bhi rhe hai
const handleLogin =(email,password) =>{
  if(email=='admin@me.com' && password=='123'){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }
  else if(Authdata ){
    const employee= Authdata.employees.find((e)=>e.email==email && e.password == password)
    if(employee){
       setUser('employee')
       setloggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }
   
  }
  else{
    alert('Invalid Credentials')
  }
}



return (
  <>
    {!User ? (
      <Login handleLogin={handleLogin} />
    ) : User === 'admin' ? (
      <AdminDashboard />
    ) : ( User== 'employee' ? 
      <EmployeeDashboard  data={loggedInUserData}  />
    :null)}
  </>
)
}

export default App
