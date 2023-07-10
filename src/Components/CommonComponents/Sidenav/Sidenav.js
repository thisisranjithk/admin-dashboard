import { LinkOff } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../Home/home.css'

export default function Sidenav() {
  return (
    <div className='db-sidenavbar'>
        <div className='db-logo'>Logo</div>
        <div className='db-list'>
            <div className='db-options'>
              <Link to="/" style={{ textDecoration: 'none', color:"black" }}><div>Dashboard</div></Link>
              <Link to="/accounts" style={{ textDecoration: 'none', color:"black" }}><div>Accounts</div></Link> 
              <Link to="/products" style={{ textDecoration: 'none', color:"black" }}><div>Products</div></Link>
              <Link to="/addproducts" style={{ textDecoration: 'none', color:"black" }}><div>Add Products</div></Link>
              <Link to="/settings" style={{ textDecoration: 'none', color:"black" }}><div>Settings</div></Link>
            </div>
        <div className='db-support'>
            <h6 className='support-title'>Support</h6>
            <div className='support'>Chat</div>
            <div className='support'>FAQ</div>
        </div>
        </div>
      </div>
  )
}
