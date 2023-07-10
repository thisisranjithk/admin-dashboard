import React from 'react'
import '../addproducts.css'
export default function General() {
  return (
    <section id='general'>
        <div className='basic-info'>
          <h3>Basic Info</h3>
          <div className='general _productName'>
            <label><span className='astricred'>*</span>Product Name</label>
            <input className='general__input' type="text" placeholder='eg. Leather shoes'></input>
          </div>
          <div className='general _description'>
            <label><span className='astricred'>*</span>Description</label>
            <textarea name="description" rows="5" cols="40" className='general__input'></textarea>
          </div>
           <div className='general _category'>
            <label><span className='astricred'>*</span>Category</label>
              <div class="dropdown">
                <button className="dropbtn">Select Category</button>
                <div className="dropdown-content">
                <a href='link.com'>Elecronics</a>
                <a href='link.com'>Elecronics</a>
                <a href='link.com'>Elecronics</a>
                </div>
              </div>
          </div>
        </div>
        <div className='media'>
            <div className='media-upload'>
              <h3>Meida</h3>
              <input type="file" className='upload_container'></input>
            </div>
            <div className='media-empty'></div>
        </div>
    </section>
  )
}
