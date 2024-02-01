const blogComment = require("./BlogCommentSchema");

const editComment = async (req, res) => {
    const { text, commentEditedAt = new Date() } = req.body;
    const _id = req.params.id;
    const userId = req.user.id;

    try {
        const existingComment = await blogComment.findById(_id);

        if (!existingComment) {
            return res.status(404).json({ error: "Comment not found" });
        }

       
        if (existingComment.user && existingComment.user.toString() !== userId) {
            return res.status(403).json({ error: "Forbidden - Unauthorized user" });
        }

    
        const editedComment = await blogComment.findByIdAndUpdate(
            _id,
            { text, commentEditedAt },
            { new: true }
        );

       
        res.json(editedComment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = editComment;
