import React from 'react'
import '../themes/CorteMes.css'
import DataTable from 'react-data-table-component'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Vmodal from '../components/modal'


function CorteMes() {
  
  const columns = [
    {
        name: 'No.',
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
  

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
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
          data={data}
        />
      </div>
    </div>
    
  );
}

export default CorteMes
