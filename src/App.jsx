import './App.css'
import { ItemDetail } from './components/ItemDetail'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (

    <BrowserRouter>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
