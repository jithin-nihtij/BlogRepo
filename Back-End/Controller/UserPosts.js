const blogPost = require("./BlogPostSchema")

const userPosts = async(req,res)=>{
    const id = req.params.id
    const posts = await blogPost.find({author:id})
    res.json(posts)
}

module.exports = userPosts  