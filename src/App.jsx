import react from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import UserDashboard from './Pages/Users/UserDashboard'
import { Routes, Route } from 'react-router-dom'
import {UserLogin} from './Pages/Users/UserLogin'
import UserHome from './Pages/Users/UserHome'
//routes, route

function App() {

  return (
    <>
    <Routes>
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/login" element={<UserLogin />} />
      <Route index element={<UserHome  />} />

    </Routes>
    </>
  )
}

export default App
