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
  const [Fch_Inicio, setFch_Inicio] = useState();
  const [Fch_Fin, setFch_Fin] = useState()
  const axget = async()=>{
    var config = {
        method: 'get',
        url: `https://us-central1-escuelitas-api.cloudfunctions.net/app/movimiento/corte?fechaInicio=${Fch_Inicio}&fechaFin=${Fch_Fin}`,
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
        name: 'ID',
        selector: row => row.ID,
    },
    {
        name: 'Fecha',
        selector: row => row.Fecha.slice(0, -14),
    },
    {
        name: 'Tipo',
        selector: row => row.Tipo === 1 ? 'Ingreso' : 'Egreso',
    },
    {
        
        name: 'Monto',
        selector: row => row.Importe,
    },
    {
      grow: 1.5,
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
      height: 300,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      Shadow: 24,
      p: 4,
  };

  return (

    <div className='fondo'>


      <div className='filtros'>
        
        <p className='intxt'>Fecha Inicial</p>
        <input className='infhc' type="date" value={Fch_Inicio} onChange={(e) => setFch_Inicio(e.target.value)} min="2000-01-01" max="2040-12-31"></input>
        
        <p className='intxt'>Fecha Final</p>
        <input className='infhc' type="date" value={Fch_Fin} onChange={(e) => setFch_Fin(e.target.value)} min="2000-01-01" max="2040-12-31"></input>

        
        <button className='btn-corte' onClick={() => axget()} style={{userSelect: 'none', cursor: 'pointer'}}>Buscar</button>
        <button className='btn-corte' onClick={handleOpen} style={{userSelect: 'none', cursor: 'pointer', marginLeft:'40px'}}>Añadir movimiento</button>
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
