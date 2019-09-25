const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Handling get requests to products'
    });
});

router.post('/',(req,res,next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: 'Handling post requests to products',
        createdProduct: product
    });
});

module.exports = router;