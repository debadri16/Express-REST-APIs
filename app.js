const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/products', productRoutes);

app.use((req,res,next) => {
    const err=new Error('Not found');
    err.status=404;
    next(err);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;