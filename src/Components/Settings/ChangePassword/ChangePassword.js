import React from 'react'
import "./changepassword.css"

export default function ChangePassword() {
  return (
    <section id='changePassword'>
        <h1>Change Password</h1>
        <div className='cp'>
          <div className='cp-container'>
            <label><span className='astricred'>*</span>Current Paassword</label>
            <input type="password" className='basic-input'></input>
          </div>
          <div className='cp-container'>
            <label><span className='astricred'>*</span>New Password</label>
            <input type="password" className='basic-input'></input>
          </div>
          <div className='cp-container'>
            <label><span className='astricred'>*</span>Conform Password</label>
            <input type="password" className='basic-input'></input>
          </div>
          <button className='Update-password'>Change Password</button>
        </div>
        
        
    </section>
  )
}
