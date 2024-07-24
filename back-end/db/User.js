const mongoose = require('mongoose');
//const uniqueValidate = require('mongoose-unique-validator');
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});



//userSchema.plugin(uniqueValidate);

let User = mongoose.model("users", userSchema);
module.exports=User;
