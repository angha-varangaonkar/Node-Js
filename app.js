//creating server using express


const express =require('express');
const product =require('./product ')

const app =express();
const port =3000;
app.use(express.json())
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

//read api 
//accepts two params first id url for api 

app.get('/api/v1/getproduct',(req ,res)=>{
    // res.status(200).send(product)
    res.status(200).json(
        {
            length:product.length,
            data:product
        }
    )
    
})

//fetching single api 
//how to send the id in the url and retrieve it 

app.get('/api/v1/getproduct/:id',(req,res)=>{
    console.log(req.params);
    const id =parseInt(req.params.id)
    const filterProduct=product.filter((product)=>{
        return product.id===id
    })
    res.json({
        data:filterProduct
    })
    console.log(id);
    
    
})


//creating a new product -post method 

app.post('/api/v1/addproduct',(req,res)=>{
    // console.log(req.body);

    const newData =req.body;
    newData.id=product.length+1;
    product.push(newData);
    res.json({
        data :product
    })
    
})