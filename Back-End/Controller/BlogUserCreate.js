const bcrypt = require('bcrypt');
const blogUser = require("./BlogUserSchema");
const jwt = require('jsonwebtoken');

const createBlogUser = async (req, res) => {
    const { username, email, password } = req.body;

  
        const existingUser = await blogUser.findOne({ email });

        if (existingUser) {
             res.json({ alert: "User already exists" });
        }
        else{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
    
            const userDetails = await blogUser.create({
                username,
                email,
                password: hashedPassword
            });
            
            res.json({
                id: userDetails._id,
                username: userDetails.username,
                email: userDetails.email,

                token : generateToken(userDetails._id)
            });
        }

       
    
};

const generateToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
};

module.exports = createBlogUser;
