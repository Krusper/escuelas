import React, { useState } from 'react'
import '../themes/modal.css'
import axios from 'axios';

function Vmodal(props) {

  const [date, setdate] = useState("2023-02-01");
  const [tipoMov, settipoMov] = useState(1);
  const [fecha, setfecha] = useState();
  const [concepto, setconcepto] = useState();
  const [importe, setimporte] = useState()

  const changeDate = (data) => {
    setdate(data)
    setfecha(data)
  }

  const axpost = async() => {

    let datos = {
        "tipoMov": tipoMov,
        "fecha": fecha,
        "concepto": concepto,
        "importe": importe
    }

    var config = {
      method: 'post',
      url: 'http://localhost:9000/movimiento/add',
      headers: { 
        'Content-Type': 'application/json',
      },
      data : datos
    };
    await axios(config)
    .then(function (response) {
      console.log('hecho')
      props.onClose()
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const Add = () =>{
    axpost();
  }

  return (

    <div className='container'>

      <h2>AÑADIR MOVIMIENTO</h2>
  
      <div className='dates'>
        <p>
          FECHA : <input type="date" value={date} onChange={(e) => changeDate(e.target.value)} min="2000-01-01" max="2040-12-31"></input>
        </p>
         
        <p>TIPO MOVIMIENTO :
          <select onChange={(e) => settipoMov(e.target.value)}>
            <option value={1}>INGRESO</option>
            <option value={2}>EGRESO</option>  
          </select>
        </p>
        
        <p>MONTO :
          <input type="text" onChange={(e) => setimporte(e.target.value)}></input>
        </p>
        
        <p>CONCEPTO :
          <input type="text" onChange={(e) => setconcepto(e.target.value)}></input>
        </p>
      
      
      </div>
      
      <div className='btncontainer'>
        <button className='create'  onClick={() => Add()} style={{cursor: 'pointer'}}>AÑADIR</button> 
        <button className='cancel' onClick={props.onClose} style={{cursor: 'pointer'}}>CANCELAR</button>
      </div>

    </div>
   
    
  )
}

export default Vmodal