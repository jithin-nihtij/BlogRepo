const blogComment = require("./BlogCommentSchema")

const blogCommentDelete= async (req,res)=>{
   const _id = req.params.id
    const userId = req.user.id

    try{
        const existingComment = await blogComment.findById(_id)

        if(!existingComment){
            res.status(404).json({message:"comment not found"})
        }

        if(existingComment.user && existingComment.user.toString() !== userId){
            return res.status(403).json({error:"Unauthorized user"})
           }
           await blogComment.findByIdAndDelete(_id)
           
           res.json({message:"comment deleted successfully"})
    }
    catch (err){
        console.log(err)
    }
}

module.exports = blogCommentDelete