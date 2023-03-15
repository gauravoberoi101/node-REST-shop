const express = require('express');

const ordersRouter = express.Router();

ordersRouter.get('/', (req, res, next)=>{
	res.status(200).json({
		message:"orders root"
	})
})

ordersRouter.post('/', (req, res, next)=>{
	res.status(200).json({
		message:"orders root post"
	})
})


ordersRouter.patch('/:orderId', (req, res, next)=>{
	res.status(200).json({
		message:`update orders id: ${req.params.orderId}`
	})
})

ordersRouter.delete('/:orderId', (req, res, next)=>{
	res.status(200).json({
		message:'delete orders',
		orderId: req.params.orderId
	})
})

module.exports = ordersRouter