const blogPost = require("./BlogPostSchema");
const BlogUser = require("./BlogUserSchema");

const createBlogPost = async (req, res) => {
    try {
        const { title, content, author, createdAt = new Date(),image } = req.body;

        
        const user = await BlogUser.findById(author);
        const username = user ? user.username : null;

        const postDetails = await blogPost.create({
            title, content, author, username, createdAt,image
        });

        

        res.json(postDetails);
    } catch (error) {
        console.error("Error creating blog post:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
 
module.exports = createBlogPost;