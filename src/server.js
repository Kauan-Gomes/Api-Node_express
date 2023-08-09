import express from 'express'
import { PORT } from './config.js'
import userRouter from './router/userRoute.js'
import productRouter from './router/productRouter.js'

const api = express()



api.use('/user', userRouter)
api.use('/product', productRouter)

api.all('/*', (req, res) => {
    res.json({message: "rota não encontrada"})
})

api.listen(PORT, () => {
    console.log(`servidor rodando na porta http://localhost:${PORT}`)
})