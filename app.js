const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','pug');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public'))); //serving files statically


/*app.use((req,res,next) =>{
	console.log('In the middleware');
	next();
});

app.use((req,res,next) =>{
	console.log('In the next middleware');
        res.send("<h1>Hello from Express</h1>");
});
*/

app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) =>{
        //res.status(404).send("<h1>Page not found</h1>");
        res.status(404).sendFile(path.join(__dirname,"views","404.html"));
});


//const server = http.createServer(app);

//server.listen(3000);
app.listen(3000);
