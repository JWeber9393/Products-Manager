const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public/dist/public"));//link to angular
app.use(express.json());

require('./server/routes')(app)

const port = 8000;
app.listen(8000, () => { console.log(`LISTENING ON PORT ${port}`) })