import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expense from './Pages/Expense'
import Home from './Pages/Home'

function App() {


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/expenses' element={<Expense/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  )
}




export default App
