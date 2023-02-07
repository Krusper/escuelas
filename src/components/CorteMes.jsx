import React, { useState, useEffect } from 'react'
import '../themes/CorteMes.css'
import DataTable from 'react-data-table-component'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Vmodal from '../components/modal'
import axios from 'axios'


function CorteMes() {

  useEffect(() => {
    axget()
  }, []);

  const [ResAx, setResAx] = useState();
  const [Fch_Inicio, setFch_Inicio] = useState('2023-02-01');
  const [Fch_Fin, setFch_Fin] = useState('2023-02-28')
  
  const axget = async()=>{
    var config = {
        method: 'get',
        url: `http://localhost:9000/movimiento?fechaInicio=2023-02-01&fechaFin=2023-02-28`,
      };
      await axios(config)
      .then(function (response) {
        console.log(response)
        setResAx(response.data.movimientos)
        console.log(response.data.movimientos);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  const columns = [
    {
        grow: 0.1,
        name: 'ID',
        selector: row => row.ID,
    },
    {
        grow: 1,
        name: 'Fecha',
        selector: row => row.Fecha.slice(0, -14),
    },
    {
        grow: 1,
        name: 'Tipo',
        selector: row => row.Tipo === 1 ? 'Ingreso' : 'Egreso',
    },
    {
      grow: 1,
        name: 'Monto',
        selector: row => row.Importe,
    },
    {
      grow: 10,
      name: 'Concepto',
      selector: row => row.Concepto,
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
  

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
      axget()
  };

  const estilo = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      Shadow: 24,
      p: 4,
  };

  return (

    <div >

      <div className='btn'>
        <button className='createCorte' onClick={handleOpen} style={{userSelect: 'none', cursor: 'pointer'}}>
          <p>AÑADIR NUEVO</p>
        </button>
      </div>
      
      <div className='modal' >
        <Modal
          open={open}
          onClose={handleClose}
        > 
          <Box sx={estilo} >
            <Vmodal onClose={handleClose}></Vmodal>
          </Box> 
        </Modal>
      </div>

      <div className='table'>
        <DataTable
          columns={columns} 
          data={ResAx}
        />
      </div>
    </div>
    
  );
}

export default CorteMes
