const cors = require('cors')
const express = require('express');
const app = express();


app.use(cors())

const word = ["french1"]
app.get("/", function (_req, res) {
    res.send(word)
});


app.listen(8080, function() {
    console.log('Server is running at 8080')
});