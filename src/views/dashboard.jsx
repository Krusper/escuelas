import React, {useState} from 'react'
import LogOut from '../functions/logOut'
import '../themes/dashboard.css'
import Header from '../components/header'
import Side_bar from '../components/side_bar'
import {useNavigate} from 'react-router-dom'


function Dashboard() {
const Home = () =>{
  const navigate = useNavigate()
}
  
  return (
    <div className='dashboard-containt'>
      {/* <Header></Header> */}
      {/* <Side_bar></Side_bar> */}
      <div className='dash-body'>




      </div>

     


      {/* <div className='btn-corte_mensual'>
        <p className='txt-btn'>Hacer corte mensual</p>
      </div>
      <div className='btn-informe'>
        <p className='txt-btn'>Crear informe</p>
      </div>*/}
      <button className='btn-LogOut' onClick={LogOut}>Log Out</button> 

    </div>
  )
}

export default Dashboard
