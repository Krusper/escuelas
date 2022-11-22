import React, {useState, useContext} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/credenciales";

import Login from "./views/login";
import Dashboard from "./views/dashboard"

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
    User ? <Dashboard/>  : <Login/>
  );
}

export default App;
