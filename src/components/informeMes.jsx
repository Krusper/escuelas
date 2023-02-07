import React from "react"
import DataTable from 'react-data-table-component'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import ModalInf from "../components/modalInf"
import "../themes/infomes.css"

function InformeMes() {
  
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


  const data =[
    {
      id: 1,
      fecha: '15-05-2022',
      ingreso: '540',
      egreso: '354',
      total: '186',
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
    width: 300,
    heigh: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (

    <div>
      <button className='createInfo' onClick={handleOpen} style={{userSelect: 'none', cursor: 'pointer'}}>
            CREAR NUEVO
      </button>

      <Modal
        open={open}
        onClose={handleClose}
      > 
        <Box sx={estilo}>
          <ModalInf onClose={handleClose}></ModalInf>
        </Box> 
        
      </Modal>
    
      <div className="dataTable">
        <DataTable
          columns={columns} 
          data={data}
        />
      </div>
    </div>
  );
}
  
export default InformeMes
