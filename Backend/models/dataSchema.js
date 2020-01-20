const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    email : {
        type:String,
        required : true
    },
    position : {type:String},
    city : {type:String}
});

module.exports = mongoose.model('user',userSchema);