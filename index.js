require("dotenv").config()
const express = require('express');
const app = express();
const Port=process.env.PORT || 4564
const router=require('./Routes/Route')
require('./db/Connect')
const cors=require('cors')


app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.method,req.path)
    next();
})

app.use('/api',router);


app.get('/', (req, res) => {
    res.json({msg:'server work correctly'})
})

app.listen(Port,()=>{
    console.log('server listening on port 8000');
})