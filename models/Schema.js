const mongoose = require('mongoose');

const schema= new mongoose.Schema({
 name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true 
},
no:{
    type:Number,
    required:true
},address:{

    type:String,
    required:true
}

,category:{
    type:String,
    required:true
}

,desc:{

    type:String,
    required:true

}


},{timestamps:true})

module.exports=new mongoose.model('user',schema)