var express = require('express')
var router = express.Router()
var fs = require('fs');


router.get('/', (request, response) => {
    response.json({ answer: "Hello, world! I'm working as expected!" })
})

router.post('/addFilm', function(req, res) {
    console.log(req.query)

    const q = req.query

    const nameRu = q.nameRu
    const nameEn = q.nameEn
    const description = q.description
    const rating = q.rating
    const genresArray = q.genres.split(',')

    let genres = []
    genresArray.forEach(genre => {
        genres.push({
            genre: genre
        })
    });

    let newFilm = {
        nameRu: nameRu,
        nameEn: nameEn,
        description: description,
        rating: rating,
        genres: genres
    }

    fs.readFile('films.json', function(err, content) {
        if (err) throw err;

        var parsedJSON = JSON.parse(content)
        parsedJSON.push(newFilm)

        fs.writeFile('films.json', JSON.stringify(parsedJSON), function(err) {
            if (err) throw err;
            
            res.sendStatus(200)
        })
    })

})

module.exports = router