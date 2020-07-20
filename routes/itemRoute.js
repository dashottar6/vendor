var express = require('express');
var router = express.Router();
const ItemService = require('../services/itemService')

/* GET home page. */
router.post('/addItem', function(req, res) {
    const item = req.body.item;
    const vendor = req.headers.vendor;
    ItemService.insertItem(item, vendor, function(err, response){
        if(err){
            res.status(400).send("data not saved")
        }else{
            const json = {
                "result" : response
            }
            res.status(200).send(json);
        }
    })
});

module.exports = router;
