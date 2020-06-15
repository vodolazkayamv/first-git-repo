var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('pages/index', {
        name: "МЭИ"
    })
})

router.get('/next', function(req, res) {
    res.send('приветик!')
})

module.exports = router