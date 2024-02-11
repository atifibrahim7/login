const express = require("express")
const path = require("path")
const app = express()
require('dotenv').config();
// const hbs = require("hbs")
const FormCollection = require("./mongo")
const port = process.env.PORT || 3000


app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))





app.get('/', (req, res) => {
    res.render('inputform')
})



// Assuming you have already set up your Express app and configured body parsing middleware

// POST route to handle form submission
app.post("/submit-form", (req, res) => {
    // Extract form data from request body
    const formData = req.body;
  
    // Process the form data (e.g., save it to a database)
    // For demonstration purposes, let's just log the form data
    console.log("Form data received:", formData);
  
    // Send a response back to the client
    res.send("Form submitted successfully!");
  });
  



app.listen(port, () => {
    console.log('port connected');
})