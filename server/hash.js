const bcrypt = require("bcryptjs");

const hash = (password) => {
 
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(password, salt);
    return hashed;
}

module.exports = hash;