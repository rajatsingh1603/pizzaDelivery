const express = require("express")
require("colors")
const morgan = require("morgan")
const dotenv = require('dotenv')
const connectDB = require('./config/config')

const path = require('path')

const app = express();

//config dotenv
dotenv.config()

//connection mongodb
connectDB()

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route

app.use("/api/pizzas",require("./routes/pizzaRoute"))


if(process.env.NODE_ENV === 'production'){

    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get("*",(req,res)=> {
        res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
    })
}
else{

    app.get("/",(req,res) =>{
        res.send("<h1>Hello World</h1>")
    })

}



const port = process.env.PORT || 8080;
app.listen(port, () =>{
    console.log("Server started success")
})
