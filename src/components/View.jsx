import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addproducts from './Addproducts'

const View = () => {
    var[update,setupdate]=useState(false)
    var[selected,setselected]=useState([])
    var[products,setproducts]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then(response=>{
            setproducts(products=response.data)
        console.log(products)        
    })
        .catch(error=>console.log(error))
    },[])


const DeleteValue=(id)=>{
console.log(id)
axios.delete("http://localhost:3000/products/"+id)
.then(response=>{
    alert("DELETED")
    window.location.reload(false)
})
.catch(error=>console.log(error))
    }

const updateValue=(value)=>{
    console.log("update")
        setselected(value)
        setupdate(true)
    }
    var finaljsx = <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>BRAND</TableCell>
                <TableCell>QUANTITY</TableCell>
                <TableCell>PRICE</TableCell>

            </TableRow>
        </TableHead>
        <TableBody>
            {products.map((values,index)=>{
                return <TableRow>
                    <TableCell>{values.id}</TableCell>
                    <TableCell>{values.name}</TableCell>
                    <TableCell>{values.brand}</TableCell>
                    <TableCell>{values.quantity}</TableCell>
                    <TableCell>{values.price}</TableCell>
                    <TableCell><button onClick={()=>DeleteValue(values.id)}>DELETE</button></TableCell>
                    <TableCell>
                        <button onClick={()=>updateValue(values)}>UPDATE</button>
                    </TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
   </TableContainer>

   if(update)

   finaljsx=<Addproducts data={selected} method="put"/>
  return (

  
  finaljsx

  )
}

export default View
