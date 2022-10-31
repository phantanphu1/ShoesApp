const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ProductsRouter = require('./routes/products')
const UsersRouter = require("./routes/users")

const connection_string =
    'mongodb+srv://ShopApp:ShopApp@cluster0.xpyvfsh.mongodb.net/ShopApp'

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const database = mongoose.connection

const app = express()

app.use(express.json())

const PORT = 5000
app.listen(PORT || 3000, () => {
    console.log(`server is running on PORT ${PORT}`)
})
database.on('eror', (eror) => {
    console.log(eror)
})
database.once('connected', () => {
    console.log("Database Connected")
})
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/api', ProductsRouter)
app.use('/api', UsersRouter)
