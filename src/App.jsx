import React, { useEffect,useContext , useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const Authdata= useContext(AuthContext)
  const [loggedInUserData, setloggedInUserData] = useState(null) // emplpoyee ka data isme h 
const [User, setUser] = useState(null) // user ya to admin hoga ya emoployee

useEffect(()=>{
  const loggedInUser=localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData=JSON.parse(loggedInUser)
    setUser(userData.role)
    setloggedInUserData(userData.data)
  }
},[])


// ye function check krega email and pass correct hai
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
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
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
      <AdminDashboard changeUser={setUser} />
    ) : ( User== 'employee' ? 
      <EmployeeDashboard changeUser={setUser}  data={loggedInUserData}  />
    :null)}
  </>
)
}

export default App
