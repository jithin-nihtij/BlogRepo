const blogPost = require("./BlogPostSchema")

const getSinglePost = async(req,res)=>{
    const _id = req.params.id
    const singlePostId = await blogPost.findById(_id)
    res.json(singlePostId)
}

module.exports=getSinglePost