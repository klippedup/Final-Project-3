// Modules and Globals
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//Express Settings
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').creatEngine())






app.listen(process.env.PORT, () => {
    console.log(`Game is running on port ${PORT}`)
})