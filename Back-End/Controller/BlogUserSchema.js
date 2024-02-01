const mongoose = require('mongoose')

const BlogUserSchema = mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true}, 
})

const blogUser = mongoose.model("BlogUser",BlogUserSchema)

module.exports =  blogUser