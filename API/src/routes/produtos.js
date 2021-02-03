const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=> {
    res.status(200).send({
        mensagem: 'Usando GET dentro da rota de produtos'
    });
});

router.post('/',(req,res,next) =>{
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }

    res.status(201).send({
        mensagem: 'Usando o Post dentro da rota de produtos',
        produtoCriado: produto
    });
});

router.get('/:productId', (res,req,next) => {
    const id = req.params.productId

    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Vc passou um ID'
        });
    }

});

module.exports = router;