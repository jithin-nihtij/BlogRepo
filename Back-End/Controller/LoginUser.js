const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blogUser = require('./BlogUserSchema');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const userData = await blogUser.findOne({ email });

    if (userData && await bcrypt.compare(password, userData.password)) {
        const token = generateToken(userData._id);
        res.json({
            message: "Successful",
            token: token,
            userId: userData._id
        });
    } else {
        res.json({ message: "Failed" });
    }
};

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
};
 
module.exports = loginUser;