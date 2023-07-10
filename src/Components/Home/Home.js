import React from 'react'
import Sidenav from '../CommonComponents/Sidenav/Sidenav'
import Header from '../CommonComponents/Header/Header'
import './home.css'
import DBContent from '../Dashboard-Content/DBContent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accounts from '../Accounts/Accounts'
import Products from '../Products/Products'
import AddProducts from '../Add Products/AddProducts'
import Settings from '../Settings/Settings'




export default function Home() {
  return (
    // <BrowserRouter>
    <section id='dashboard-main'>
      <Sidenav />
      <div className='db-content'>
       <Header />
       <div className='db-content-container'>
        <Routes>
          <Route path='/' element={<DBContent/>}></Route>
          <Route path='/accounts' element={<Accounts />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/addproducts' element={<AddProducts />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Routes>
       </div>
      </div>
    </section>
    // </BrowserRouter>

  )
}
