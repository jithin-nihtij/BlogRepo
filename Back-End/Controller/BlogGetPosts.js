const blogPost = require("./BlogPostSchema")

const blogGetPosts = async(req,res)=>{

    const getPost = await blogPost.find()
    res.json(getPost)
}

module.exports=blogGetPosts