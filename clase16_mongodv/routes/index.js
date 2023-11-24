const routes = require("./routes/index");
const express = require("express");
const ruta = express.Router();
const port = 3000;

app.use(express.json());
app.use("/",ruta);

app.listen(port,()=>{
    console.log()
})

