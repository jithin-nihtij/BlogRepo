const mongoose = require('mongoose')

const BlogCommentSchema = mongoose.Schema({
    text:{type:String,require:true},
    author:{type: mongoose.Schema.Types.ObjectId,ref: 'BlogUser', required: true},
    blogpost: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost', required: true },
    commentedAt:{type:Date,default:Date.now},
    commentEditedAt:{type:Date,default:null}
})

const blogComment = mongoose.model("BlogComment",BlogCommentSchema)

module.exports = blogComment