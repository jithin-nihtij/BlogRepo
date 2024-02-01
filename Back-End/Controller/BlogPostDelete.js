const blogPost = require("./BlogPostSchema")

const blogPostDelete = async(req,res)=>{
    const _id = req.params.id
    // const userId = req.user.id

    try{
        // const existingPost = await blogPost.findById(_id)

        // if(!existingPost){
        //    return res.status(404).json("Post Not Found")
        // }

        // if(existingPost.author.toString() !== userId  ){
        //    return res.status(403).json("Unauthorized User")
        // }

        await blogPost.findByIdAndDelete(_id)
        res.json({message:"deleted succesfully"})

    }
 
    catch(err){
        console.log(err)
    }
}
module.exports = blogPostDelete