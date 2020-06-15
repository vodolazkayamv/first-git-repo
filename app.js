const express = require('express')
const app = express()
const port = 3000

const path = require('path')

///
/// EXPRESS RENDERING
///
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

///
/// EXPRESS ROUTING
///
app.use('/', require('./routes/index'))

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`))