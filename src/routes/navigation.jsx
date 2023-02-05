import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../views/login'
import Dashboard from '../views/dashboard'
import CorteMes from '../components/CorteMes'
import PrivateRoute from './privateRoute'
import InformeMes from '../components/informeMes'

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route exact path='/' element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }/>

        <Route path='/cortes' element={
          <PrivateRoute>
            <CorteMes/>
          </PrivateRoute>
        }/>

        <Route path='/informes' element={
          <PrivateRoute>
            <InformeMes/>
          </PrivateRoute>
        }/>

      </Routes>
    </BrowserRouter>
  )
}

export default Navigation