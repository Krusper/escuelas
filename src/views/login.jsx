import React, {useState} from 'react'
import '../themes/login.css'
import logo from '../resources/SEP.png'
import Loguee from '../components/loguee'
import Regist from '../components/Regist'

function Login(){

  
  const [Logeando, setLogeando] = useState(true)

  const handlerLogeando = (data) =>{

    console.log('entro')
    setLogeando(!data)
  }
  
  
  return (
    <>
    {
    <div className='App'>
      <div className='body'>
        <section className='seccion-inicio'>
          <div></div>
          <div className='component-loguee'>  {Logeando ? <Loguee setLogeando={setLogeando}/> : <Regist setLogeando={setLogeando}/>}  </div>
        </section>

      </div>
    </div>
    
    }
    </>
  )
}

export default Login

