import './App.css'
import { Routes, Route} from 'react-router-dom'
import Tabnav from './components/Tabnav'
import Homepage from './components/Homepage'
import Documents from './components/Documents'

function App() {


  return (
    <>
      <Routes>
        <Route path="/tabnav" element={<Tabnav />}/>
        <Route path="/documents" element={<Documents />}/>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </>
  )
}

export default App
