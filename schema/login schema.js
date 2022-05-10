const mongoose = require("mongoose");

const loginschema = mongoose.Schema(
    {
        Login :{
            type:String,
            require:true
        },
        Password:{
            type:String,
            require:true
        },
    });

module.exports = mongoose.model("logData", loginschema);