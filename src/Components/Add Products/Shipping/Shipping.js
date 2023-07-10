import React from 'react'
import '../addproducts.css'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
export default function Shoping() {
  return (
    <section id='shipping'>
        <h3>Shipping</h3>
        <div className='shipping_container_1'>
          <div className='shipping-height'>
            <label><span className='astricred'>*</span>Height</label>
            <input type='text' className='general__input s-height'></input>
            <Select defaultValue="cm">
              <Option value="cm">cm</Option>
              <Option value="mm">mm</Option>
              <Option value="inch">inch</Option>
              <Option value="m">m</Option>
            </Select>
            </div>
            <div className='shipping-width'>
            <label><span className='astricred'>*</span>Width</label>
            <input type='text' className='general__input s-height'></input>
            <Select defaultValue="cm">
              <Option value="cm">cm</Option>
              <Option value="mm">mm</Option>
              <Option value="inch">inch</Option>
              <Option value="m">m</Option>
            </Select>
            </div>
        </div>
    </section>
  )
}
