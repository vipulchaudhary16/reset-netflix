const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { connectToDatabase } = require('./config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 6000;

connectToDatabase()

app.get('/', (req, res) => {
    res.send('Hello from netflix API!');
});

app.use('/', require('./routes/reset'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});