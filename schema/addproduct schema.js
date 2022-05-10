const mongoose = require("mongoose");

const addproductschema = mongoose.Schema(
    {
        Productname :{
            type:String,
            require:true
        },
        Productdiscription:{
            type:String,
            require:true
        },
        Productcategory:{
            type:String,
            require:true
        },
        Productsubcategory:{
            type:String,
            require:true
        },
        Productquantity:{
            type:Number,
            require:true
        },
        Productprice:{
            type:Number,
            require:true
        },
    });

module.exports = mongoose.model("addproductData", addproductschema);