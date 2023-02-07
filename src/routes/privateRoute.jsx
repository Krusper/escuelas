import React, { useState } from 'react'
import Header from '../components/header'
import Side_bar from '../components/side_bar'
import { auth } from '../firebase/credenciales'
import { Navigate } from 'react-router'

function PrivateRoute({children}) {

  const [User, setUser] = useState();
  if(User === undefined){
    auth.onAuthStateChanged(user => {

    });
  }

  if(User === null){
    return <Navigate to='/login'/>;
  }

  return (

    <>
    <div className='Container_all'>
        
      <Header></Header>
        
      <div className='Container_body' style={{display: 'flex', flexDirection: 'row'}}>
        <Side_bar></Side_bar>
        <div className='body' style={{width:'100%'}}> {children} </div>
      </div>
      
    </div> 
  </> 
  )
}

export default PrivateRoute