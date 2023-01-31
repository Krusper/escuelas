import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Header from '../components/header'
import Side_bar from '../components/side_bar'
import { onAuthStateChanged } from "firebase/auth";
import LogOut from '../functions/logOut';
import {useAuthState} from 'firebase/auth'
import { auth } from '../firebase/credenciales';

function PrivateRoute({children}) {

  const navigate = useNavigate()

  setTimeout (() => {
    console.log(auth.currentUser);  
    if (!auth.currentUser) {
      return <Navigate to='/login'/>
    }
  }, 2000)

  
  return (

    <>
    <div className='Container_all'>
        
      <Header></Header>
        
      <div className='Container_body' style={{display: 'flex', flexDirection: 'row'}}>
        <Side_bar></Side_bar>
        <div className='body'> {children} </div>
      </div>
      
    </div> 
  </> 
  )
}

export default PrivateRoute