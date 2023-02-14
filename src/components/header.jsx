import React from 'react'
import '../themes/header.css'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const GoHome = () =>{
    navigate('/')
  }
  return (

    <>
      <div className='header'>
        <div className='welcome'>
          <h1>BIENVENIDO</h1>
        </div>
      </div>
      
        

    </>
   
  )
}

export default Header