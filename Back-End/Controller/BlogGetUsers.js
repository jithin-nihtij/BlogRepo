const blogUser = require("./BlogUserSchema")

const blogGetUser = async(req,res)=>{

    const getUser = await blogUser.find()
    res.json(getUser)
}



module.exports = blogGetUser