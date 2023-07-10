import React from 'react'
import './accounts.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Accounts() {
  return (
    <section id='accounts'>
    
        <div className='accounts-form-container'>
          <h1>Account Details</h1>
           <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
            <div className='FL-name'>
               <TextField 
                id="standard-size-normal"
                label="First Name"
                variant="standard"
                size='large'
                />
                
                    <TextField
                id="standard-required"
                label="last Name"
                variant="standard"
                />
                
             
            </div>
            <div className='accounts-email'>
              <TextField fullWidth label="Email" id="fullWidth" variant="standard"/>
            </div>
            <div className='accounts-bio'>
              <TextField
              fullWidth 
          id="outlined-multiline-static"
          label="Boi"
          multiline
          rows={3}  
        />
            </div>
          <div className='accounts-button'>
            <Button variant="contained" color="success">Update</Button>
          </div>
          
        </Box>
        </div>
    </section>
  )
}
