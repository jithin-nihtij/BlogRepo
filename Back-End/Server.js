const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connection = require('./Config/Mongo');
const router = require('./Router');

dotenv.config();
connection();

const app = express();



app.use(express.json());

app.use(cors());
app.use('/', router);

dotenv.config()

const Port =7000;
app.listen(Port, console.log(`Server is running on port ${Port}`));

///////////////////////////////////////////////////////////////////




