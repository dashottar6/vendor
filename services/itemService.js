const Item = require("../dao/itemDAO");
const ItemModel = require("../models/shoppingList");
var short = require('short-uuid');


/**
 * This function inserts an item to the local database
 * @memberof itemService
 * @function insertItem
 * @param {function} callback
 */
function insertItem(item, vendorID, callback) {
    const query = {
        itemList: item,
        vendorId : vendorID,
        cartId : short.generate()
    };
    ItemModel.create(query, function(err, result){
       if(err){
           return(err, null);
       }else{
           return callback(null, result);
       }
   })
}

module.exports = {
    insertItem
}