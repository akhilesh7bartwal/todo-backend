let express = require('express')

const mongoose = require('mongoose')

const apiroute= require('./routes/api_routes')

const cors= require('cors')

let app = express()

let port = 3030

app.use(express.json())

app.use('/', apiroute)

// app.use(cors({
//     origin: '*'
// }))

const url= "mongodb+srv://akhilesh:AKHILESH007@cluster0.ma5a9.mongodb.net/Kellton-Ecommerce?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true})
.then( () =>{
    console.log('Database Conected')
}).catch(err => console.log(err))

app.listen(port, () =>{
    console.log(`Running the port :"http://localhost:${port}/`)
})