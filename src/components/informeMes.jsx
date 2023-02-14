import React from "react"
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import ModalInf from "../components/modalInf"
import "../themes/infomes.css"

function InformeMes() {        

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
    <div className="back">
      <div className="informes">
        <div className="botns">
          <button className='createInfo' onClick={handleOpen} style={{userSelect: 'none', cursor: 'pointer'}}>
                CREAR NUEVO
          </button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
        > 
          <Box sx={estilo}>
            <ModalInf onClose={handleClose}></ModalInf>
          </Box> 
          
        </Modal>
      </div>
    </div>
  );
}
  
export default InformeMes
