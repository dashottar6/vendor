const mongoose = require('mongoose');
const Schema = mongoose.schema

//Schema for the shopping items in the cart

const itemSchema = new Schema({
    itemList :{
        type : Object,
        required : true
    },
    vendorId :{
        type : String,
        required: true
    },
    cartId :{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('items', itemSchema);