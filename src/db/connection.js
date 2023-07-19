const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/registration",{
    useNewUrlParser:true,
    useUnifiedtopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connected");
})
.catch((e)=>{
    console.log("error");

})