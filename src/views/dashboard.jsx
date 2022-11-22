import React from 'react'
import LogOut from '../functions/logOut'

function Dashboard() {
  return (
    <div>Dashboard
      <button onClick={LogOut}>Log Out</button>
    </div>
  )
}

export default Dashboard