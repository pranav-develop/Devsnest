const emailValidate = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(email.toLowerCase()));
    return re.test(email.toLowerCase());
}

const passwordValidate = (password) => {
    const re = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    console.log(re.test(password));
    return re.test(password);
}

module.exports = {
    emailValidate,
    passwordValidate
}