const mongoose = require('mongoose')

const BlogPostSchema = mongoose.Schema({
    username: String,
    title:{type:String,required:true,unique:true},
    content:{type:String,required:true,unique:true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'BlogUser', required: true},
    createdAt:{type: Date, default: Date.now},
    editedAt:{type: Date, default:null},
    image:{ type: String}
})

const blogPost = mongoose.model("BlogPost",BlogPostSchema)

module.exports = blogPost


