const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// create a database connection -> u can also 
// create a separate file for this and import/use that file here

mongoose.connect('mongodb+srv://manishdabaria28:9587Manish@cluster0.pl52w.mongodb.net/').then(() => console.log('MongoDB connected'))
.catch(err=>console.log('MongoDB connection error: ',err));

const app = express()
const PORT = process.env.PORT || 5000;


app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))