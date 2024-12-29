const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const router = express.Router();

// get french verbs from database
// router.get("/", async (_req, res) => {
//     const allVerbs = await prisma.verbs.findMany({
//       orderBy:[
//         {
//           verbName: 'asc'
//         }
//       ]
//     });
//     res.status(201).json(allVerbs);
//   });


router.get("/", async (_req, res) => {
  const allVerbs = await prisma.verbs.findMany({
    orderBy:[
      {
        value: 'asc'
      }
    ]
  });
  res.status(201).json(allVerbs);

});
module.exports = router;