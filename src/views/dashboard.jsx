import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../themes/dashboard.css'
// import LogOut from '../functions/logOut'


function Dashboard() {
  const navigate = useNavigate()
  const GoCorteMes = () =>{
    navigate('/cortemes')
    alert('xd')
  }

  return (
    <div className='dash-body'>
     <p>Holo</p>
    </div>
  )
}

export default Dashboard
