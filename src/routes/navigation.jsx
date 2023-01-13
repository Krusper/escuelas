import React from 'react'
import { HashRouter as Router, Route, Routes} from 'react-router-dom'
import Regist from '../components/Regist'
import Login from '../views/login'
import Corte_mensual from '../components/corte_mensual'
import Dashboard from '../views/dashboard'



function Navigation() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
            <Route path='/entrar' element={<Login/>}/>
            <Route path='/registrarse' element={<Regist/>}/>
            <Route path='/corte_mensual' element={<Corte_mensual/>}/>
        </Routes>
    </Router>
  )
}

export default Navigation