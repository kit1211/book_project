const express       = require('express');
const router        = express.Router();
const bookService   = require('../services/bookService');
const helper        = require('../helper');
// const fs            = require('fs');



router.get('/',  
    async function (req, res, next){
        try {
            const data = await bookService.getMulti(req.query.page)
            // fs.appendFileSync('./logsTest/route_get_func.txt', JSON.stringify(data, null, 2) + '\n\n');
            res.json({
                data, 
                time: helper.getBangkokTimeISO()
            });
        } catch (error) {
            console.error(`Error while getting books `, error.message);
            next(error);
        }
    }
);


router.post('/', 
    async function(req, res, next) {
        try {
            const result = await bookService.create(req.body);
            // fs.appendFileSync('./logsTest/route_postInsert_func.txt', JSON.stringify({"incomingRequest" : req.body, result}, null, 2) + '\n\n');
            res.json({
                result, 
                time: helper.getBangkokTimeISO()
            });
        } catch (error) {
            console.error(`Error while creating book`, error.message);
            next(error);
        }
    }
);


router.put('/:id', 
    async function(req, res, next){
        try {
            const result = await bookService.update(req.params.id, req.body);
            res.json({
                result, 
                time: helper.getBangkokTimeISO()
            });
        } catch (error) {
            console.error(`Error while updating book`, error.message);
            next(error);
        }
    }
);




module.exports = router;
