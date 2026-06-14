import React, { createContext,useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'


export const AuthContext = createContext()


const AuthProvider = ({children}) => {


    const [UserData, setUserData] = useState(null)

   const data= getLocalStorage()
   console.log(data)
  return (
    <div>
        <AuthContext.Provider value={'Sarthak'}>
{children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
