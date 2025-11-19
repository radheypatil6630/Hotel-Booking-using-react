const {
  Schema,
  model
} = require("mongoose");

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    maxlength: 50
  },
  password: {
    type: Number,
    required: true,
  },

});

const AdminModel = model("admin", adminSchema, "admin_login");

const RoomSchema = new Schema({
  roomType: {
    type: String,
    required: true,
    maxlength: 100,
    unique: true
  },
  roomImage: {
    type: String,
    // required:true,
  },
  price: {
    type: Number,
    required: true,
  },

});

// Middleware to create 10 room details when a new room type is created
RoomSchema.post('save', async function (doc) {
  try {
    // Import RoomDetailModel here to avoid circular dependency
    const mongoose = require('mongoose');
    const RoomDetailModel = mongoose.model('roomDetails');

    // Check if room details already exist for this room type
    const existingDetails = await RoomDetailModel.find({ roomTypeRef: doc._id });

    if (existingDetails.length === 0) {
      // Create 10 room details (numbered 1-10) for this room type
      const roomDetails = [];
      for (let i = 1; i <= 10; i++) {
        roomDetails.push({

          roomNumber: i,
          roomType: doc.roomType,
          roomImage: doc.roomImage,
          price: doc.price,
          roomTypeRef: doc._id,
          isAvailable: true
        });
      }
      await RoomDetailModel.insertMany(roomDetails);
    }
  } catch (error) {
    console.error('Error creating room details:', error);
  }
});

const RoomModel = model("rooms", RoomSchema, "rooms");


const BookingSchema = new Schema({
  roomType: {
    type: Schema.Types.ObjectId,
    ref: "roomDetails",
    required: true,
  },
  roomId: {
    type: Schema.Types.ObjectId,
    ref: "roomDetails",
    required: true,
  },
  guest_name: {
    type: String,
    required: true,
  },
  guest_email: {
    type: String,
    required: true,
  },
  guest_phone: {
    type: Number,
    required: true,
  },
  check_in: {
    type: Date,
    required: true,
  },
  check_out: {
    type: Date,
    required: true,
  },
  number_of_guests: {
    type: Number,
    required: true,
  },
  total_price: {
    type: Number,
    required: true
  },
  payment_status: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending"
  },
  payment_id: {
    type: String,
    required: false
  },
  payment_date: {
    type: Date,
    required: false
  }

})

const BookingModel = model("bookings", BookingSchema, "booking");


const RoomDetailSchema = new Schema({
  roomNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  roomType: {
    type: String,
    required: true,
    maxlength: 100
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  bookedFrom: {
    type: Date,
    required: false
  },
  bookedTo: {
    type: Date,
    required: false
  }
});

const RoomDetailModel = model("roomDetails", RoomDetailSchema, "roomDetails");


async function initializeRoomDetails() {
  try {
    const roomTypes = await RoomModel.find();

    for (const roomType of roomTypes) {
      const existingDetails = await RoomDetailModel.find({ roomTypeRef: roomType._id });

      if (existingDetails.length === 0) {
        const roomDetails = [];
        for (let i = 1; i <= 10; i++) {
          roomDetails.push({
            roomNumber: i,
            roomType: roomType.roomType,
            roomTypeRef: roomType._id,
            isAvailable: true,
            bookedFrom: null,
            bookedTo: null
          });
        }
        await RoomDetailModel.insertMany(roomDetails);
        console.log(`Created 10 room details for room type: ${roomType.roomType}`);
      }
    }
  } catch (error) {
    console.error('Error initializing room details:', error);
  }
}


module.exports = {
  AdminModel,
  RoomModel,
  BookingModel,
  RoomDetailModel,
  initializeRoomDetails
};