import React from 'react'
import '../../Home/home.css'
import bellicon from '../../../assests/notifications/Vector.svg';
import Avatar from '../../../assests/dashboard/Avatar - circle.svg';

export default function Header() {
  return (
     <div className='db-navbar'>
          <input type="text" placeholder="Search" className='nav-searchBar'></input>
          <div className='navbar-others'>
              <img className='nav-bell' src={bellicon} alt='bell-Icon'></img>
              <span className='nav-line'></span>
              <h6>Ranjith K</h6>
              <img src={Avatar} className="nav-avatar" alt='avatar'></img>
          </div>
        </div>
  )
}
