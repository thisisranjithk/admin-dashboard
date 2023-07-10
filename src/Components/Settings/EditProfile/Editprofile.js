import React from 'react'
import "./editprofile.css"
export default function Editprofile() {
  return (
    <section id='editprofile'> 
        <div className='ep container-1'>
            <div className='profile-img'></div>
            <button className='change-avatar'>Change Avatar</button>
            <button className='remove'>Remove</button>
        </div>
        <div className='ep container-2'>
            <div className='ep-name'>
                <h5 className='ep-label'><span className='astricred'>*</span>Name</h5>
                <input type="text" className='basic-input'></input>
            </div>
            <div>
                <h5 className='ep-label'><span className='astricred'>*</span>User Name</h5>
                <input type="text" className='basic-input'></input>
            </div>
        </div>
        <div className='ep container-3'>
            <div className='ep-name'>
                <h5 className='ep-label'><span className='astricred'>*</span>Email</h5>
                <input type="email" className='basic-input'></input>
            </div>
            <div>
                <h5 className='ep-label'>Date of birth</h5>
                <input type="Date" className='basic-input'></input>
            </div>
        </div>
        <div className='ep container-4'>
            <div className='ep-name'>
                <h5 className='ep-label'><span className='astricred'>*</span>Phone Number</h5>
                <input type="text" className='basic-input'></input>
            </div>
            <div>
                <h5 className='ep-label'>Website</h5>
                <input type="text" className='basic-input'></input>
            </div>
        </div>
        <div className='ep container-5'>
            <div className='ep-name'>
                <h5 className='ep-label'>Address</h5>
                <input type="text" className='basic-input ep-address'></input>
            </div>
        </div>
        <div className='ep container-6'>
            <button className='save-changes'>Save Changes</button>
        </div>
        
    </section>
  )
}
