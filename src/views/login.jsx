import React from 'react'
import '../themes/login.css'
import Loguee from '../components/loguee'

function Login(){
  return (
    <>
    {
        <div className='App'>
            <div className='body'>
                <section className='seccion-inicio'>
                  <div></div>
                    <div className='component-loguee'><Loguee></Loguee></div>
                </section>
            </div>
        </div>
    }
    </>
  )
}

export default Login
