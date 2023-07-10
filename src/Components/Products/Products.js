import React from 'react'
import './products.css'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Margin } from '@mui/icons-material';

const category = [
  {
    value: 'Cloths',
    label: 'Cloths',
  },
  {
    value: 'Bags',
    label: 'Bags',
  },
  {
    value: 'Shoes',
    label: 'Shoes',
  },
  {
    value: 'Mobiles',
    label: 'Mobiles',
  },
  {
    value: 'Watchs',
    label: 'Watchs',
  },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: 'John', age: 150 }
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


export default function Products() {
  return (
    <section id='products'>
        <h1>Products List</h1>
        <div className='products-container'>
                <div className='products-navbar'>
                    <div className='products-navbar-items'>
                        <div>
                            <input type="text" placeholder='Search' className='products-search'></input>
                        </div>
                        <div className='products-dropmenu'>
                            <TextField 
                            sx={{
                                width:"20ch"
                            }}
                                id="outlined-select-currency"
                                select
                                label="All Products"
                            >
                            {category.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                            ))}
                            </TextField>
                        </div>
                    </div>
                    <div>
                    <Button variant="contained" startIcon={<AddShoppingCartIcon />}>Add Products</Button>
                    </div>
                </div>
                <div className='products-lists'>
                    <div style={{ height: '100%', width: '100%' , border:"none"}}>
                        <DataGrid
                        sx={{fontSize:"14px",
                            textAlign:"center"
                      }}
                          rows={rows}
                          columns={columns}
                          pageSize={5}
                          rowsPerPageOptions={[5]}
                          checkboxSelection
                        />
                    </div>
                </div>
        </div>
    </section>
  )
}
