import React, {useState, useContext} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/credenciales";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./views/login";
import Dashboard from "./views/dashboard"
import CorteMes from './components/corte_mensual'

function App() {
  const [User, setUser] = useState(null)

  onAuthStateChanged(auth, FireUser =>{
    if (FireUser){
      setUser(FireUser)
    }else{
      setUser(null)
    }
  })

  
  return (

    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route path="/corteMes" element={<CorteMes/>}/>
      </Routes>
      </BrowserRouter>
      </>

    // User ? <Dashboard/>  : <Login/>
  );
}

export default App;
