const express = require('express')
const dotenv = require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5001;

app.get("/",(req,resp)=>{
    resp.send("Handled by Auth-services")
})

app.listen(PORT,()=>{
    console.log(`Auth-services is running on port ${PORT}`);
})

