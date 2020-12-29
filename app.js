const express = require('express');
const app = express()
const studentRouter = require('./routes/studentsRoutes');

app.use(express.json())

app.use('/api/v1/student',studentRouter);

module.exports=app;//