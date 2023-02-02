import React from 'react'
import Header from './header'
import '../themes/CorteMes.css'
import DataTable from 'react-data-table-component'

function CorteMes() {
  
  const columns = [
    {
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'Fecha',
        selector: row => row.fecha,
    },
    {
        name: 'Ingresos',
        selector: row => row.ingreso,
    },
    {
        name: 'Egresos',
        selector: row => row.egreso,
    },
    {
      name: 'Total',
      selector: row => row.total,
    },
  ];  

  return (

    // <div className='corteMes'>

    //   <div className='table'>
    //     <div className='corteTabla'>
    //       <p>RELACION DE CORTES MENSUALES</p>
    //     </div>
    //   </div>

    // </div>
    <DataTable
      columns={columns}
      // data = {data}
    />
  );
}

export default CorteMes