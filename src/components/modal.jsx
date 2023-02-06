import React from 'react'
import '../themes/modal.css'

function Vmodal() {

    

  return (

    <div className='container'>

      <h2>AÑADIR MOVIMIENTO</h2>
  
      <div className='dates'>
        <p>FECHA :</p>
        <p>TIPO MOVIMIENTO :</p>
        <p>MONTO :</p>
        <p>CONCEPTO :</p>
      </div>
      
      <div className='btncontainer'>
        <button className='create' style={{cursor: 'pointer'}}>AÑADIR</button> 
        <button className='cancel' style={{cursor: 'pointer'}}>CANCELAR</button>
      </div>

    </div>
   
    
  )
}

export default Vmodal