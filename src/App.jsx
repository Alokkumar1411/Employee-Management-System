import React, { useEffect, useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const { UserData } = useContext(AuthContext)

  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [User, setUser] = useState(null)

  useEffect(() => {

    if (!UserData) return

    const loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser')
    )

    if (loggedInUser) {

      setUser(loggedInUser.role)

      if (loggedInUser.role === 'employee') {

        const employee = UserData.employees.find(
          (e) => e.email === loggedInUser.email
        )

        setloggedInUserData(employee)
      }
    }

  }, [UserData])

  const handleLogin = (email, password) => {

    if (email === 'admin@me.com' && password === '123') {

      setUser('admin')

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'admin'
        })
      )

    } else if (UserData) {

      const employee = UserData.employees.find(
        (e) => e.email === email && e.password === password
      )

      if (employee) {

        setUser('employee')
        setloggedInUserData(employee)

        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            role: 'employee',
            email: employee.email
          })
        )

      } else {
        alert('Invalid Credentials')
      }
    }
  }

  return (
    <>
      {!User ? (
        <Login handleLogin={handleLogin} />
      ) : User === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}
    </>
  )
}

export default App