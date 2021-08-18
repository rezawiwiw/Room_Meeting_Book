const express = require('express');
const router = express.Router();
const reservationRouter = require('./reservationRouter')

/* GET home page. */
router.use('/reservation', reservationRouter)

module.exports = router;
