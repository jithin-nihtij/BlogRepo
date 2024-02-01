const BlogPost = require("./BlogPostSchema");

const editPost = async (req, res) => {
    
    const { title, content, editedAt = new Date() } = req.body;
    const postId = req.params.id;
   

    try {
        

        const editedPost = await BlogPost.findByIdAndUpdate(
            postId,
            { title, content, editedAt },
            { new: true }
        );
        res.json(editedPost);
    } catch (err) {
        console.error(`Error editing blog post: ${err.message}`);
        
    }
};

module.exports=editPost