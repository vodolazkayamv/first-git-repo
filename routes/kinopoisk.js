var express = require('express')
var router = express.Router()
var rp = require('request-promise')
var fs = require('fs');

function makeAPIrequest(req, res, next) {
    
    var options = {
        uri: 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?',
        qs: {
            keyword: 'star wars' // -> uri + '?keyword=star%20wars'
        },
        headers: {
            'User-Agent': 'Request-Promise',
            "X-API-KEY":"1f37da89-b5d9-49ed-9000-6cebbac196e2",
        },
        json: true // Automatically parses the JSON string in the response
    }

    rp(options)
    .then(function (response) {
        // делаем что-то с результатом запроса
        req.response = response
        next()
    })
    .catch(function (err) {
        // делаем что-то с пойманной ошибкой
        req.error = err
        next(err)
    })
}

router.use(makeAPIrequest)

router.get('/', function(req, res) {
    console.log(req.response)
    
    const films = req.response.films

    res.render('pages/kinopoisk', {
        message: req.response.keyword,
        films: films
    })
})

router.get('/api', function(req, res) {
    fs.readFile('films.json', function(err, content) {
        if (err) throw err

        let films = JSON.parse(content)
        
        res.render('pages/kinopoisk', {
            message: req.response.keyword,
            films: films
        })
    })
})

module.exports = router