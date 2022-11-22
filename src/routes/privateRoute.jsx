import React, {createContext, useContext, useState, useEffect} from 'react'
const AuthContext = useContext()

export const useAuth = () =>{
  const context = useContext(AuthContext)
  if ( !context ) throw new Error('Provider no declarado')
  return context  
}

export const AuthProvider = () => {
  return (
    <div>privateRoute</div>
  )
}
