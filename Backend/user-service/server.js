const express = require('express')
const dotenv = require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5004;

app.listen(PORT,()=>{
    console.log(`User-services is running on port ${PORT}`);
})

