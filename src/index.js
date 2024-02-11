const express = require("express")
const path = require("path")
const app = express()
// const hbs = require("hbs")
const FormCollection = require("./mongo")
const port = process.env.PORT || 3000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))





app.get('/', (req, res) => {
    res.render('inputform')
})



app.post('/FormCollection', async (req, res) => {

console.log(req.body);
})




app.listen(port, () => {
    console.log('port connected');
})