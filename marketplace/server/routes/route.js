const router = require('express').Router()



router.get('/', (req, res) => {
    res.render('market', {carros:[{img: "carro3.jpg", precio: "$ 8000.00"}, {img: "carro4.jpg", precio: "$ 21000.00"}]})
})

router.get('/buy', (req, res) => {
    res.render('market', {carros:[{img: "carro1.jpg", precio: "$ 5000.00"}, {img: "carro2.jpg", precio: "$ 24000.00"}]})
})

router.use((req, res, next) => {
    return next()
})



module.exports = router