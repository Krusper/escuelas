import React, { useState } from 'react'
import '../themes/modal.css'

function Vmodal(props) {

  const [date, setdate] = useState("2020-01-01");

  const changeDate = (data) => {
    setdate(data) 
  }

  return (

    <div className='container'>

      <h2>AÑADIR MOVIMIENTO</h2>
  
      <div className='dates'>
        <p>
          FECHA : <input type="date" value={date} onChange={(e) => changeDate(e.target.value)} min="2000-01-01" max="2040-12-31"></input></p>
         
        <p>TIPO MOVIMIENTO :      <select>
            <option>INGRESO</option>
            <option>EGRESO</option>  
          </select></p>
        
        <p>MONTO :    <input type="text"></input></p>
        
        <p>CONCEPTO : <input type="text"></input></p>
      
      
      </div>
      
      <div className='btncontainer'>
        <button className='create' style={{cursor: 'pointer'}}>AÑADIR</button> 
        <button className='cancel' onClick={props.onClose} style={{cursor: 'pointer'}}>CANCELAR</button>
      </div>

    </div>
   
    
  )
}

export default Vmodal