const mongoose = require('mongoose');

const url=process.env.DB

mongoose.connect(url)
.then(()=>{
    console.log("connection established successfully");
}).catch((err)=>{
    console.log(err);
})