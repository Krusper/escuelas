import React, {useState} from 'react'
import '../themes/logister.css'
import RegisterUser from "../functions/registerUser"
import { async } from '@firebase/util'


function Regist(props) {

  const SubmitRegist = async(e) =>{
    e.preventDefault()
    const Email = e.target.email.value
    const pass = e.target.pass.value
    await RegisterUser(Email, pass)
  }

  const SwitchLoguee = () =>{
    props.setLogeando(true)
  }
    
  return (
    <div className='container-loguee'>

      <div className='head-loguee'>
        <p>Registrate</p>
      </div>

      <form className='form-loguee' onSubmit={SubmitRegist}>
        <input id='pass' className='in-loguee' type='text' placeholder='Nombre de usuario'></input>
        <input id='email' className='in-loguee' type='text' placeholder='Correo'></input>
        <input id='pass' className='in-loguee' type='password' placeholder='Contraseña'></input>
        <input id='pass' className='in-loguee' type='password' placeholder='Confirmar contraseña'></input>
        
        <div className='foot-loguee'>
          <div className='switchi' onClick={() => SwitchLoguee()}>Ya tienes cuenta? Inicia sesion</div>
          <div className='btn-loguee'><button className='btnIn' type='submit'>Registrarse</button></div>
        </div>

      </form>

    </div>
  )
}

export default Regist

