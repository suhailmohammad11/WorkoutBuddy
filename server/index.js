require("dotenv").config()

const express=require("express");
const cors=require("cors");
const app= express();

//port
const port= process.env.PORT || 4000

//DB Connection
require("./db/connections")

//Require Routes
 const workoutRoutes=require("./routes/workoutRoutes")
 const userRoutes = require("./routes/userRoutes")

 //Middlewares
 app.use(express.json())

 //cors
 app.use(cors())
 
//Routes
app.use("/api/workouts", workoutRoutes )
app.use("/api/user", userRoutes)

app.listen(port,()=>{
    console.log(`Server Listening at port ${port}`);
})