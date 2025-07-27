import express from "express"; //import express
import router from './Routes/routing.js' //import your route
import connnect from "./dB/db.js"; //import you schema creation file
const app = express() //declare the express
connnect()
// middleware
app.use(express.json())//understand json
app.use(express.urlencoded({extended:true}))//table encoder

app.get("/", (req, res) => {
    res.json({ msg: "hi da mapla" })
})  //default get data
// MiddlewareFunction
app.use('/user', router) //default path

app.listen(8000, () => {  //creation server
    console.log("runiing server http://localhost:8000") //check tha browser
})