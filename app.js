const express = require('express')
const productRouter = require('./api/router/products')
const ordersRouter = require('./api/router/orders')
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req,res,next)=>{
	res.json({
		message:"it works"
	})
})

app.use('/products', productRouter)
app.use('/orders', ordersRouter)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
	const error = new Error('not found');
//	error.status = 404
	next(error)
})

app.use((error, req, res, next)=>{
	
	res.status(error.status || 500)
	res.json({
		error: {
			message: error.message
		},
		
	})
})


module.exports = app