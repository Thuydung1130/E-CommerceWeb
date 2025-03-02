import { Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './common/Header/Header'
import Pages from './pages/Pages'
import Layout from './Layouts'

function App() {


  return (
    <>


      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Pages/>}/>
        </Route>

      </Routes>

      {/* <Route path='/'>
        </Route>
       */}



    </>
  )
}

export default App
