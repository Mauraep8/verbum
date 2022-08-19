const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();
const cors = require('cors')
const frenchRoute = require('./routes/french')

const app = express();
app.use(cors());

app.use(express.json());

app.use("/french", frenchRoute);

app.listen(8085, function() {
    console.log('Server is running at 8085')
});