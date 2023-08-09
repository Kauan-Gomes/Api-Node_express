import express from 'express'
import bodyParser from 'body-parser'

import { PORT } from './config.js'
import userRouter from './router/userRoute.js'
import productRouter from './router/productRouter.js'
import logger from './middlewares/logger.js'

const api = express()

api.use(logger)
api.use(bodyParser.json())

api.use('/user', userRouter)
api.use('/product', productRouter)

api.all('/*', (req, res) => {
    res.status(404).json({ message: "rota não encontrada" })
})

api.listen(PORT, () => {
    console.log(`servidor rodando na porta http://localhost:${PORT}`)
})