const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const connectDB = require('./db');
connectDB();

const apiRoutes = require('./routes/AdminLoginApi')
app.use('/api',apiRoutes);

const roomsApi = require('./routes/RoomsApi')
app.use('/api/rooms', roomsApi);

const bookingApi = require('./routes/BookingApi')
app.use('/api/bookings', bookingApi);




app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})