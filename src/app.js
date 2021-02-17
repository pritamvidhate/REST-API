
const express = require("express");
require("../src/db/connects");  
const Rankingrec = require("../src/models/schema");
const router = require("../src/routers/route");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(router);

app.listen(port, ()=>{
    console.log(`connection is successful at port no ${port}`);
})