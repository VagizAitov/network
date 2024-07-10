import './App.css'
import { Routes, Route } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Wall from './components/Wall/Wall'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Wall />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
