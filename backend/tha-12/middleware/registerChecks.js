const { emaiValidate,
    passwordValidate,
    emailValidate } = require('../utils/validate')
/**
 * email validation - abc@x.com
 * password validation - min 6
 * password === confirm
 */
const registerInitialCheck = (req, res, next) => {
    console.log(req.body);
    const { email, password, confirmPassword } = req.body;
    console.log(email, password, confirmPassword);
    if (typeof email === 'string' &&
        typeof password === 'string' &&
        typeof confirmPassword === 'string' &&
        email.length > 0 &&
        password.length > 0 &&
        confirmPassword == password &&
        emailValidate(email) &&
        passwordValidate(password)) {
        next();
    }
    else {
        res.status(401).send('Iniital checks failed')
    }
};

module.exports = registerInitialCheck;