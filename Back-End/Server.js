const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connection = require('./Config/Mongo');
const router = require('./Router');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

dotenv.config();
connection();

app.use(express.json());
app.use(cors());
app.use('/', router);

const Port = 7000;
app.listen(Port, console.log(`Server is running on port ${Port}`));
