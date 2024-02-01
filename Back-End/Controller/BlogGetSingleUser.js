const blogUser = require("./BlogUserSchema")

const blogGetSingleUser = async(req,res)=>{
    const id = req.params.id
    const getSingleUser = await blogUser.findById(id)
    res.json(getSingleUser)
}

module.exports = blogGetSingleUser 