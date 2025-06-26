const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req,res)=>{
    res.send('Server had Started');
})

app.get('/about', (req,res)=>{
    res.send('This is About Page');
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})   