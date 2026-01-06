import { Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './pages/Home'

import React from 'react'
import EditPage from './pages/Edit'

const App = () => {
  return (
    <div className="container">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<EditPage/>}/>
      </Routes>
    </div>
  )
}
export default App

