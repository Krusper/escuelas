import React from 'react'
import { HashRouter as Router, Route, Routes} from 'react-router-dom'
import Regist from '../components/Regist'
import Login from '../views/login'
import Dashboard from '../views/dashboard'
import CorteMes from '../components/corte_mensual'
import PrivateRoute from './privateRoute'



function Navigation() {
  return (
    <Router>
      <Routes>

        <Route path='/login' element={<Login/>}/>
        
        <Route path='/registrarse' element={<Regist/>}/>

        <Route exact path='/' element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }/>



          <Route path='/corteMensual' element={
            <PrivateRoute>
              <CorteMes/>
            </PrivateRoute>
          }/>

      </Routes>
    </Router>
  )
}

export default Navigation