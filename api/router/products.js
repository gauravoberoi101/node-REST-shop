const express = require('express')

const productsrouter = express.Router();

productsrouter.get('/', (req,res,next)=>{
	res.status(200).json({
		message:"prducts root"
	})
})

productsrouter.post('/', (req,res,next)=>{
	console.log('req.body',req.body)
	const product = {
		name: req.body.name
	}
	res.status(200).json({
		message:"prducts root post"
	})
})

productsrouter.patch('/:productId', (req,res,next)=>{
	console.log('req.params',req.params.productId)
	res.status(200).json({
		message:"update product" +' '+ req.params.productId
	})
})

productsrouter.delete('/:productId', (req,res,next)=>{
	console.log('req.params',req.params.productId)
	res.status(200).json({
		message:"delete product" +' '+ req.params.productId
	})
})

module.exports = productsrouter