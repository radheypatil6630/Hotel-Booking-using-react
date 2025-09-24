const express = require('express');
const router = express.Router();

const { BookingModel, RoomModel } = require('../model');

// Create Booking
router.post('/create-booking', async (req, res) => {
  try {
    const {
      roomType, // client sends selected room type
      guestName,
      guestEmail,
      guestPhone,
      checkIn,
      checkOut,
      numberOfGuests,
      totalPrice,
      paymentStatus,
    } = req.body;

    // 1️⃣ Find a room of that type (you can also sort by price or availability)
    const room = await RoomModel.findOne({ roomType }).sort({ isAvailable: true });

    if (!room) {
      return res
        .status(404)
        .json({ success: false, message: 'No room available for this type' });
    }

    // 2️⃣ Create booking with that roomId
    const newBooking = new BookingModel({
      roomId: room._id,
      guestName,
      guestEmail,
      guestPhone,
      checkIn,
      checkOut,
      numberOfGuests,
      totalPrice,
      paymentStatus,
    });

    await newBooking.save();

    // 3️⃣ Optionally, mark the room as "booked"
    room.isAvailable = false;
    room.bookedFrom = checkIn;
    room.bookedTo = checkOut;
   
    await room.save();

    res
      .status(201)
      .json({
        success: true,
        message: 'Booking created successfully',
        booking: newBooking,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
