const User = require('../models/user');
const bcrypt = require('bcrypt')
/** 
 * check if email already exists 
 * password hashing
 * email lowercase and save
 * save
*/
const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        let alreadyExists = await User.findOne({ where: { email } });
        if (alreadyExists) {
            res.status(401).send("Email already exists");
        }
        const salt = bcrypt.genSaltSync()
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({ email: email.toLowerCase(), password: hash, fullName: "tushar" })
        const savedUser = await newUser.save();
        res.status(201).send(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Something went wrong');
    }
}

module.exports = register;