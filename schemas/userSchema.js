import mongoose from "mongoose";
import autoincrement from 'mongoose-auto-increment'
const userSchema= mongoose.Schema({
    name:String,
    username:String,
    email:String,
    mobile:String
})
autoincrement.initialize(mongoose.connection)
userSchema.plugin(autoincrement.plugin,'user')
const User= mongoose.model('user',userSchema)
export default User