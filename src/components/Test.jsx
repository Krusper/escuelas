import React, { useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

export default function Test() {
    
  const [ ResAxios, setResAxios ] = useState();


    const axpost = async() => {

        let datos = {
            "tipoMov": 2,
            "fecha": "2023-02-06",
            "concepto": "test-req",
            "importe": 200
        }
  
        var config = {
          method: 'post',
          url: 'http://localhost:9000/movimiento',
          headers: { 
            'Content-Type': 'application/json',
          },
          data : datos
        };
        await axios(config)
        .then(function (response) {
          console.log('hecho')
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    const axget = async()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:9000/movimiento?fechaInicio=2023-02-01&fechaFin=2023-02-28',
          };
          await axios(config)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    const col = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Fecha',
            selector: row => row.fecha,
        },
        {
            name: 'Tipo de movimiento',
            selector: row => row.tipoMov,
        },
        {
            name: 'Monto',
            selector: row => row.monto,
        },
        {
          grow: 4,
          name: 'Concepto',
          selector: row => row.concepto,
        },
    ];

    const data = [
        {
          id: 1,
          fecha: '15-02-2012',
          tipoMov: 'Ingreso',
          monto: '2345',
          concepto: 'Cuota padres de familia',
        },
      ];


  return (
    <div className='test-containt'>
        <button onClick={() => axpost()}>POST DATA</button>
        <button onClick={() => axget()} >GET</button>
        <DataTable
        columns={col}
        data={data}
        
        >

        </DataTable>
    </div>
  )
}
