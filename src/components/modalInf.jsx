import React, { useState } from 'react'
import '../themes/modalinf.css'
import axios from 'axios'
import { jsPDF } from "jspdf"

function ModalInf(props) {

  const [date, setdate] = useState("2020-01-01");

  const changeDate = (data) => {
    setdate(data) 
  }

  const [fecha, setfecha] = useState("2020-01-01");

  const changeFecha = (dato) => {
    setfecha(dato)
  }

  const crearPdf = async()=>{
    var config = {
        method: 'get',
        url: `https://us-central1-escuelitas-api.cloudfunctions.net/app/movimiento/corte?fechaInicio=${date}&fechaFin=${fecha}`,
      };
      await axios(config)
      .then(function (response) {

        const ingresos = Number(response.data.totalIngresos)
        const egresos = Number(response.data.totalEgresos)
        const totales = Number(response.data.total)
        const movimientos = Array.from(response.data.movimientos)
        const movIngreso = movimientos.filter((m) => m.Tipo === 1)
        const movEgreso  = movimientos.filter((m) => m.Tipo === 2)
        const movIngHtml = movIngreso.map((m) => `<span>${m.Concepto}</span> <span>$${Number(m.Importe).toFixed(2)}</span>`).join(" ")
        const movEgrHtml = movEgreso.map((m) => `<span>${m.Concepto}</span> <span>$${Number(m.Importe).toFixed(2)}</span>`).join(" ")
        const pdfHtml = `
        <div style="width: ${2180/4}px; height: ${3400/4}px; padding: ${40}px; letter-spacing: ${2}px;">
        <div style="display: grid; grid-template-rows: auto max-content; gap: 40px; ">
           
            <div style="display: grid; gap: 15px; align-items: center;  justify-content: center; border-bottom: 4px solid rgb(117, 116, 116); padding-bottom: 30px;"> 
                <div style="font-weight: bold; font-size: large;">DATOS DE LA ESCUELA</div>
                <div style="display: grid;">
                  <div> <b>Escuela: </b> FRANCISCO I. MADERO</div>
                    
                  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr">
                    <span> <b>Clave: </b> 25DPR0955Z</span>
                    <span> <b>Turno: </b> TIEMPO COMPLETO</span>
                    <span> <b>Zona: </b> 032</span>
                  </div>
                   
                  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr">
                    <span> <b>Sector: </b> II</span>
                    <span> <b>Localidad: </b> LOS MOCHIS, SINALOA</span>
                    <span> <b>Total de alumnos:</b> 302</span>
                  </div>
                </div>
            </div>
           
            <div style="display: grid; gap: 15px; border-bottom: 4px solid rgb(117, 116, 116); padding-bottom: 20px;">
                <div>
                    <div style="font-weight: bold; font-size: large;">INGRESOS ECONOMICOS</div>
                    <div>Total de ingresos economicos del periodo ${date} al ${fecha}</div>
                </div>
                <div style="display: grid; grid-template-columns: auto max-content;">${movIngHtml}</div>
                <div>
                    <div style="display: grid; grid-template-columns: auto max-content;">
                        <span>TOTAL DE INGRESOS</span>
                        <span>$${ingresos.toFixed(2)}</span>
                    </div>
                </div>
            </div>
           
            <div style="display: grid; gap: 15px;">
                <div>
                    <div style="font-weight: bold; font-size: large;">EGRESOS REGISTRADO</div>
                    <div>Total de egresos del periodo ${date} al ${fecha}</div>
                </div>
                <div style="display: grid; grid-template-columns: auto max-content;">${movEgrHtml}</div>
                <div>
                    <div style="display: grid; grid-template-columns: auto max-content;">
                        <span>TOTAL DE EGRESOS</span>
                        <span>$${egresos.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div style="display: grid; gap: 15px; align-items: center;  justify-content: center; border-bottom: 4px solid rgb(117, 116, 116); padding-bottom: 30px;"> 
                <div>
                    <div style="display: grid; grid-template-columns: auto max-content;">
                        <span>TOTAL NETO</span>
                        <span>$${totales.toFixed(2)}</span>
                    </div>
                </div>
            </div>    
        </div>
    </div>
        `
        
        const creatorPdf = new jsPDF( 'p', 'px', [3508/4, 2480/4])
        creatorPdf.html(pdfHtml).save(`Informe de ${date} - ${fecha} Francisco I. Madero`)
        
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <p>INGRESE EL PERIODO INICIAL</p>
      <input type="date" value={date} onChange={(e) => changeDate(e.target.value)} min="2000-01-01" max="2040-12-31"></input> 

      <p>INGRESE EL PERIODO FINAL</p>
      <input type="date" value={fecha} onChange={(e) => changeFecha(e.target.value)} min="2000-01-01" max="2040-12-31"></input>

      <div className='btns'>
        <button className='Create' onClick={() => crearPdf()} style={{cursor: 'pointer'}}>CREAR</button>
        <button className='Cancel' onClick={props.onClose} style={{cursor: 'pointer'}}>CANCELAR</button>
      </div>
    </div>
  )
}

export default ModalInf
         