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




app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})