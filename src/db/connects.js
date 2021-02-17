const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/olympics", {
    useCreateIndex:true,
    useNewUrlParser:true, 
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(() =>{
    console.log("successsss");
}).catch((e) =>{
    console.log("connection is fail");
})
