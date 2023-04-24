const dotenv = require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();

const taskManager = require(path.join(__dirname, 'routes', 'taskRouter.js'));
app.use(express.json());

app.use('/', taskManager);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is listening on port: ${process.env.PORT}`);
})
