
import './App.css'
import {Routes,Route,RouterProvider,BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/success' element={<Success/>}/>
      <Route path='/*' element={<Error/>} />

    </Routes>
      
    </BrowserRouter>
  )
}

export default App
