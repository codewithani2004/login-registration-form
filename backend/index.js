const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const FormDataModel = require('./models/FormData');

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors({
    origin: true
}));

// =======================
// MongoDB CONNECTION
// =======================
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("DB Error:", err));


// =======================
// REGISTER API
// =======================
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await FormDataModel.findOne({ email });

        if (existingUser) {
            return res.json("Already registered");
        }

        const newUser = await FormDataModel.create({
            name,
            email,
            password
        });

        res.json(newUser);

    } catch (error) {
        res.json(error);
    }
});


// =======================
// LOGIN API
// =======================
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await FormDataModel.findOne({ email });

        if (!user) {
            return res.json("No records found!");
        }

        if (user.password !== password) {
            return res.json("Wrong password");
        }

        res.json("Success");

    } catch (error) {
        res.json(error);
    }
});


// =======================
// TEST ROUTE
// =======================
app.get('/check', (req, res) => {
    res.send("Server is running fine ✔️");
});


// =======================
// START SERVER
// =======================
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});