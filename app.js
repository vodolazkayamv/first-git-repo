const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const createError = require('http-errors')

///
/// EXPRESS RENDERING
///
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));

///
/// EXPRESS ROUTING
///
app.use('/', require('./routes/index'))
app.use('/kp', require('./routes/kinopoisk'))
app.use('/api', require('./routes/api'))

///
/// ERROR HANDLER
///

// catch 404 error
app.use(function(req, res, next) {
    next(createError(404));
})

app.use(errorHandler)
function errorHandler (err, req, res, next) {
    res.status(err.status || 500)
    if (req.error) {
        res.render('error', {
            error: err,
            message: req.error.error.messange
        })
    }
    else {
        res.render('error', {
            error: err,
            message: err.messange
        })
    }
}

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`))