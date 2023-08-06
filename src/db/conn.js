const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/webdproj", {
}).then(()=>{
    console.log("connection succesful bc");
}).catch((error)=> {
    console.log(error);
})

