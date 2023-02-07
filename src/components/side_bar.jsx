import React, {useState} from 'react'
import '../themes/side_bar.css'
import corte from '../resources/corte.svg'
import docu from '../resources/docu.svg'
import Corte_mensual from './CorteMes'
import { useNavigate } from 'react-router-dom'




function Side_bar() {
  const navigate = useNavigate()

  const GoCorte = () =>{
   navigate('/cortes')
  }
  
  const GoInforme = () =>{
   navigate('/informes')
  }
  
  
   return (

   <div className='side_bar'>

      <div className='btn-redirect' onClick={()=>GoCorte()}>
         <img src={corte} />
         <p>Movimientos</p>
      </div>

      <div className='btn-redirect' onClick={()=>GoInforme()}>
         <img src={docu} />
         <p>Informes</p>
      </div>
   </div>
      
    
  );
}

export default Side_bar