const express       = require('express');
const router        = express.Router();
const bookService   = require('../services/bookService');
const helper        = require('../helper');
const fs            = require('fs');

router.get('/',  
    async function (req, res, next){
        try {
            const data = await bookService.getMulti(req.query.page)
            fs.appendFileSync('./logsTest/route_get_func.txt', JSON.stringify(data, null, 2) + '\n\n');
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




module.exports = router;
