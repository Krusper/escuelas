import React, {useState} from 'react'
import '../themes/side_bar.css'
import corte from '../resources/corte.svg'
import docu from '../resources/docu.svg'
import Styled from 'styled-components'
import Corte_mensual from '../components/corte_mensual'



function Side_bar() {
  
  
  
  
   return (

   <div className='side_bar'>

      <button className='btnCut'>
         
         <img src= {corte}></img>
         <p>CORTE MENSUAL</p>
          
      </button>

      <button className='btnInf'>

         <img src= {docu}></img>
         <p>INFORME MENSUAL</p>

      
      </button>
      
   </div>
      
    
  );
}

export default Side_bar