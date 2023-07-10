import React from 'react'
import rightColumnImg from '../../assests/dashboard/rightColumnImg.svg'

export default function Welcome() {
  return (
    <>
        <div className='welcome-title'>
            <h4>Welcome to your dashboard!</h4>
            <p>Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!</p>
        </div>
        <div className='welcome-img'>
            <img src={rightColumnImg} alt='img'></img>
        </div>
    </>
  )
}
