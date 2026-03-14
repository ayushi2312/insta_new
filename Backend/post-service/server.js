const express = require('express')
const dotenv = require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5003;

app.listen(PORT,()=>{
    console.log(`Post-services is running on port ${PORT}`);
})

