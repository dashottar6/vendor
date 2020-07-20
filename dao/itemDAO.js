const Item = require('../models/shoppingList');


function insertItem(item, callback) {
    Item.create(item, function (error, result) {
        if (error) {
            console.log("error occured at inserting into the database")
            callback(error);
        } else {
            callback(null, result);
        }
    });
}
//
// function CheckIfEmailExists(query, callback) {
//     Customer.findOne(query)
//         .exec()
//         .catch(function (err) {
//             LOGGER.error(`Error occured in findUserFromLoyaltyCardNumber :: ${FILE_NAME} :: ${err}`);
//             LOGGER.debug(`Exiting from findUserFromLoyaltyCardNumber :: ${FILE_NAME}`);
//             return callback(err, null);
//         })
//
//         .then(function (result) {
//
//             LOGGER.debug(`Exiting from CheckIfEmailExists :: ${FILE_NAME}`);
//             return callback(null, result);
//
//         });
//
// }
