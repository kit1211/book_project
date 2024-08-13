const express       = require('express');
const router        = express.Router();
const bookService   = require('../services/bookService');


router.get('/',  
    async function (req, res, next){
        try {
            res.json(
                await bookService.getMulti(req.query.page)
            );
        } catch (error) {
            console.error(`Error while getting books `, error.message);
            next(error);
        }
    }
);


module.exports = router;
