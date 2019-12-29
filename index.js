require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const users =require('./src/routes/users')
const restaurants =require('./src/routes/restaurants')
const items =require('./src/routes/items')
const categories =require('./src/routes/categories')
const carts =require('./src/routes/carts')
const riviews =require('./src/routes/riviews')


const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/users',users)
app.use('/restaurants',restaurants)
app.use('/items',items)
app.use('/categories',categories)
app.use('/carts',carts)
app.use('/riviews',riviews)

const port = process.env.APP_PORT

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.post('/',(req,res)=>{
    res.send(req.body)
})

app.listen(port,()=>{
    console.log('App Listen on port'+port)
})