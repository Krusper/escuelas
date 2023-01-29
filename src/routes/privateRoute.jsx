import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../components/header'
import Side_bar from '../components/side_bar'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/credenciales';
import LogOut from '../functions/logOut';

function PrivateRoute({children}) {

  const [User, setUser] = useState(null)

  onAuthStateChanged(auth, FireUser =>{
    if (FireUser){
      setUser(FireUser)
    }else{
      setUser(null)
      return <Navigate to='/login'/>
      
    }
  })
  
  return (

    <> 
    <div className='Container_all'>
        
    <Header></Header>
        <Side_bar></Side_bar>
        <div className='Container_body'>
            <div className='body'> {children} </div>
        </div>
    </div> 
  </> 
  )
}

export default PrivateRoute