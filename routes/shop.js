const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');


const router = express.Router();

router.get("/",(req,res,next) =>{
	//res.send("<h1>Hello from Express</h1>");
        //res.sendFile(path.join(__dirname,'..','views','shop.html'));
        //res.sendFile(path.join(rootDir,'views','shop.html'));
        const products = adminData.products;
        res.render('shop',{prods:products,docTitle:"Shop"});                 // return the template file
	
});

module.exports = router;
