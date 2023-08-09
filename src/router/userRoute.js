import express from 'express'

const router = express.Router()

router.get('/', (req, res)=>{   
    const dados = req.body
   

    res.json({
        message: "Usuário recebido com sucesso",
        dados: dados
    
    })
})

router.post('/', (req, res)=>{
    //Create
    const dados = req.body
    

    res.json({
        message: "Usuário criado com sucesso",
        dados: dados
    
    })
})

router.put('/', (req, res)=>{
    //Update
    const dados = req.body
    

    res.json({
        message: "Usuário atualizado com sucesso",
        dados: dados
    
    })
})

router.delete('/', (req, res)=>{
    //Apagar
    const dados = req.body
    

    res.json({
        message: "Usuário apagado com sucesso",
        dados: dados
    
    })
})

export default router