import React, { useState } from 'react'
import '../themes/modalinf.css'

function ModalInf(props) {

  const [date, setdate] = useState("2020-01-01");

  const changeDate = (data) => {
    setdate(data) 
  }

  const [fecha, setfecha] = useState("2020-01-01");

  const changeFecha = (dato) => {
    setfecha(dato)
  }

  return (
    <div>
      <p>INGRESE EL PERIODO INICIAL</p>
      <input type="date" value={date} onChange={(e) => changeDate(e.target.value)} min="2000-01-01" max="2040-12-31"></input> 

      <p>INGRESE EL PERIODO FINAL</p>
      <input type="date" value={fecha} onChange={(e) => changeFecha(e.target.value)} min="2000-01-01" max="2040-12-31"></input>

      <div className='btns'>
        <button className='Create' style={{cursor: 'pointer'}}>CREAR</button>
        <button className='Cancel' onClick={props.onClose} style={{cursor: 'pointer'}}>CANCELAR</button>
      </div>
    </div>
  )
}

export default ModalInf
         