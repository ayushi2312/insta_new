const express = require('express')
const dotenv = require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5002;

app.get("/",(req,resp)=>{
    resp.send("Handled by Media-services")
})

app.listen(PORT,()=>{
    console.log(`Media-service is running on port ${PORT}`);
})

