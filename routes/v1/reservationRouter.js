const express = require('express');
const router = express.Router();
const { 
    RoomList,
    RoomBook,
    editBookRoom
} = require('../../controller/reservation')

router.get('/room',RoomList)
router.put('/room/book/:id',RoomBook)
router.put('/room/book/cancel/:id',editBookRoom)

module.exports = router