const express = require('express');
const fs = require('fs');

let port = 3051;

let dataJSON = fs.readFileSync('./data/data.json','utf-8');
const dataAr = JSON.parse(dataJSON);
console.log('***********************')
console.log(`dataAr[3].image=${dataAr[3].image}`)
console.log(`dataAr[3].productName=${dataAr[3].productName}`)
console.log('***********************')

// Create the server of express.
// Traditionally we call it "app".
const app = express();

app.get('/',(req,res) => {

    res.send(`<h1>Sweet, Sweet Home of EXPRESS Server😀</h1>`)

})

app.get('/product',(req,res) => {

    res.send(`<h1>Our farm has the best meat 🥩</h1>`)

})

// MISSION: create route to get /data and to send
//    the whole dataJSON

app.get('/data',(req,res) => {

    res.send(dataJSON);

})

app.get('/carrot',(req,res) => {

    res.send(dataAr[3]);

})

app.listen(port,() => {

    console.log(`Listening on the port ${port} ...`)

})