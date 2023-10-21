import './App.css'
import { ItemDetail } from './components/ItemDetail'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Women } from './pages/Women'
import { Jewerely } from './pages/Jewerely'
import { Electronics } from './pages/Electronics'
import { Men } from './pages/Men'
import { getProducts } from './components/getProducts'

getProducts()

function App() {

  return (

    <BrowserRouter>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/women" element={<Women />}/>
        <Route path="/men" element={<Men />}/>
        <Route path="/jewerely" element={<Jewerely />}/>
        <Route path="/electronics" element={<Electronics />}/>
      </Routes>
      
      <ItemDetailContainer />

    </BrowserRouter>
  )
}

export default App
