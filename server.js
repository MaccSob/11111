require("dotenv").config();
const express = require('express');
const PORT = process.env.PORT;
const server = express();


server.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
  });