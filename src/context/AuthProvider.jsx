import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [UserData, setUserData] = useState(null)

  useEffect(() => {
    if (!localStorage.getItem('employees')) {
      setLocalStorage()
    }

    const { employees, admin } = getLocalStorage()

    setUserData({
      employees,
      admin
    })
  }, [])

  return (
    <AuthContext.Provider value={{ UserData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider