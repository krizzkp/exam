import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addproducts = (props) => {
    var[input,setinput]=useState(props.data)
    console.log(props.data)
        
    const inputHandler = (e)=>{
        const{name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readvalues = ()=>{
        console.log("clicked")
        if(props.method ==="post"){
        axios.post(" http://localhost:3000/products",input)
        .then(response=>{
            alert("successfully added")
        })
        .catch(err=>console.log(err))
    }
    else if(props.method ==="put"){
        axios.put(" http://localhost:3000/products/"+input.id,input)
        .then(response=>{
            alert("success")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
}
  return (
    <div>
    <TextField id="outlined-basic" label="NAME" variant="outlined" name='name' value={input.name}
    onChange={inputHandler} />
    <Typography>{input.name}</Typography>
    <br/>
<TextField id="filled-basic" label="brand" variant="filled" name='brand' value={input.brand}
onChange={inputHandler}/>
<Typography>{input.brand}</Typography>
<TextField id="filled-basic" label="quantity" variant="filled" name='quantity' value={input.quantity}
onChange={inputHandler}/>
<Typography>{input.quantity}</Typography>
<TextField id="filled-basic" label="price" variant="filled" name='price' value={input.price}
onChange={inputHandler}/>
<Typography>{input.price}</Typography>
<br/>
<Button variant="contained"onClick={readvalues}>ADD products</Button>
    </div>
  )
}

export default Addproducts
