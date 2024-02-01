const blogComment = require("./BlogCommentSchema")

const createBlogComment = async(req,res)=>{
    const {text,author,blogpost,commentedAt = new Date()} = req.body
    const commentDetails = await blogComment.create({
        text,author,blogpost,commentedAt
    })
    res.json(commentDetails)
}

module.exports = createBlogComment