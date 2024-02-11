const blogPost = require("./BlogPostSchema");
const BlogUser = require("./BlogUserSchema");
const multer = require('multer');
const path = require('path');

// ... (your existing multer setup)

const createBlogPost = async (req, res) => {
    try {
        // Assuming 'uploaded' is the multer middleware instance
        if (!req.file) {
            return res.status(400).json({ error: "No file was uploaded." });
        }

        const { title, content, author, createdAt = new Date() } = req.body;
        const imageName = req.file.filename; // Filename of the uploaded file

        const user = await BlogUser.findById(author);
        const username = user ? user.username : null;

        const postDetails = await blogPost.create({
            title, content, author, username, createdAt, image: imageName
        });

        res.json(postDetails);
    } catch (error) {
        console.error("Error creating blog post:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = createBlogPost;
