const mongoose= require("mongoose");
const bcrypt= require("bcrypt"); // to encrypt the password
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

//static signup

userSchema.statics.signup= async function (email, password){
    const exists= await this.findOne({email});
    if(exists){
        throw Error("Email Already exists...!")
    }

    const salt= await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password, salt)
    
    const user= await User.create({email, password:hashedPassword})
    return user;
}

//static login funtion

userSchema.statics.login = async function (email,password){
    const user= await this.findOne({email});
    if(!user){
        throw Error("Incorrect Email")
    }

    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw Error("Incorrect Password..!")
    }
     return user;
}

const User= new mongoose.model("User", userSchema);

module.exports=User