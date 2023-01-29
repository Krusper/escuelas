import React, {useState, useContext} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/credenciales";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./views/login";
import Dashboard from "./views/dashboard"
import CorteMes from './components/corte_mensual'
import Navigation from "./routes/navigation";

function App() {
  
  
  return (

    <>
      <Navigation></Navigation>
    </>

    // User ? <Dashboard/>  : <Login/>
  );
}

export default App;
