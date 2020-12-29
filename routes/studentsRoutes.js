const express = require('express');
const studentController = require('../controller/studentController');

const router = express.Router();
//
router
    .route('/addstudent')
    .post(studentController.addStudentDetails);

router
    .route('/getstudent')
    .get(studentController.getStudentDetails);

router
    .route('/addmarks')
    .post(studentController.addmarks);

router
    .route('/heighestmark')
    .get(studentController.highestscore);

router
    .route('/averagemarks')
    .get(studentController.averagemarks)

module.exports = router;