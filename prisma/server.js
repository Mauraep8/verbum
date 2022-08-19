const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json());

app.get("/", async (_req, res) => {
  const allVerbs = await prisma.verbs.findMany();
  res.json(allVerbs);
});

// async function main() {
//     const allVerbs = await prisma.verbs.findMany()
//     console.log(allVerbs)
// }
    
    
// main()
//    .then(async () => {
//           await prisma.$disconnect()
//       })
//       .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//       })


app.listen(8085, function() {
    console.log('Server is running at 8085')
});