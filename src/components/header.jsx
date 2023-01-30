import React from 'react'
import '../themes/header.css'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const GoHome = () =>{
    navigate('/')
  }
  return (

    <div className='header'>

      <div className='Home' style={{userSelect: 'none', cursor: 'pointer'}} onClick={() =>GoHome()}>
        Home
      </div>  
    </div>
   
  )
}

export default Header