import React from 'react'
import '../themes/logister.css'
import LogInEmail from '../functions/logIn_Email'
import LogInGoogle from '../functions/LogIn_Google'


function Loguee(props) {

  const SubmitLogin = async(e) =>{
    e.preventDefault()
    const Email = e.target.email.value
    const pass = e.target.pass.value
    await LogInEmail(Email, pass)
  }

  const SwitchRegist = () =>{
    props.setLogeando(false)
  }
    
  return (
    <div className='container-loguee'>
      <div className='head-loguee'>
        <p>Iniciar sesion</p>
      </div>
      <form className='form-loguee' onSubmit={SubmitLogin}>
        <input id='email' className='in-loguee' type='text' placeholder='Usuario'></input>
        <input id='pass' className='in-loguee' type='password' placeholder='Contraseña'></input>
        <div className='foot-loguee'>
        <button className='btnIn' type='submit'>Acceder</button>
          <button className='btnGoog' onClick={() => LogInGoogle()}>Accede con Google</button>
          <div className='switchi' onClick={() => SwitchRegist()}>No tienes cuenta? Registrate</div>
        </div>
      </form>

    </div>
  )
}

export default Loguee

