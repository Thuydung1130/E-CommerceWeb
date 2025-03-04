import { Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './common/Header/Header'
import Pages from './pages/Pages'
import Layout from './Layouts'
import Data from './components/FlashDeals/Data'
import { useState } from 'react'
function App() {
  const {productItems}= Data;
  console.log(productItems);
  const [cartItem, setCartItem] =useState([]);
  return (
    <>


      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Pages productItems={productItems}/>}/>
        </Route>

      </Routes>

      {/* <Route path='/'>
        </Route>
       */}



    </>
  )
}

export default App
