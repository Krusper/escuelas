import React, {useState} from 'react'
import '../themes/loguee.css'
import logo from '../resources/SEP.png'


function Loguee() {

  const [user, setuser] = useState()
  const [pass, setpass] = useState()
    
  return (
    <div className='container-loguee'>
      <div className='head-loguee'>
        <p>Bienvenido</p>
        <div className='cont-img'>
            <img className='logo-img' src={logo} />
        </div>
      </div>
      <form className='form-loguee'>
        <input className='in-loguee' type='text' placeholder='Usuario' onChange={(e) => setuser(e.target.value)}></input>
        <input className='in-loguee' type='password' placeholder='Contraseña' onChange={(e) => setpass(e.target.value)}></input>
        <div className='foot-loguee'>
          <div></div>
          <div className='btn-loguee'><button className='btnIn' type='submit'>Iniciar Sesión</button></div>
        </div>
      </form>

    </div>
  )
}

export default Loguee

