const mongoose=require("mongoose")

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connect Established");
}).catch((err)=>{
    console.log(`You have error : ${err}`)
})