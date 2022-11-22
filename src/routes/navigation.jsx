import React from 'react'
import { HashRouter as Router, Route, Routes} from 'react-router-dom'
import Regist from '../components/Regist'
import Login from '../views/login'



function Navigation() {
  return (
    <Router>
        <Routes>
            <Route path='/entrar' element={<Login/>}/>
            <Route path='/registrarse' element={<Regist/>}/>

        </Routes>
    </Router>
  )
}

export default Navigation