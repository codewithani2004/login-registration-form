// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(cors({ origin: true }));

// // =======================
// // MongoDB CONNECT
// // =======================
// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// // =======================
// // USER MODEL
// // =======================
// const UserSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// });

// const User = mongoose.model("User", UserSchema);

// // =======================
// // REGISTER
// // =======================
// app.post("/register", async (req, res) => {
//     const { name, email, password } = req.body;

//     const exist = await User.findOne({ email });

//     if (exist) {
//         return res.json({ message: "User already exists" });
//     }

//     const user = await User.create({ name, email, password });

//     res.json({ message: "Register successful", user });
// });

// // =======================
// // LOGIN
// // =======================
// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//         return res.json({ message: "User not found" });
//     }

//     if (user.password !== password) {
//         return res.json({ message: "Wrong password" });
//     }

//     res.json({
//         message: "Login successful",
//         user
//     });
// });

// // =======================
// // SERVER START
// // =======================
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log("Server running on " + PORT);
// });




const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// =======================
// MIDDLEWARE
// =======================
// app.use(express.json());
// app.use(cors());
app.use(express.json());

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
}));

// =======================
// ROOT ROUTE
// =======================
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// =======================
// MONGODB CONNECT
// =======================
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✔️"))
.catch(err => console.log("MongoDB Error:", err));

// =======================
// USER SCHEMA
// =======================
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", UserSchema);

// =======================
// REGISTER API
// =======================
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const exist = await User.findOne({ email });

        if (exist) {
            return res.status(400).json({ message: "User already exists ❌" });
        }

        const user = await User.create({ name, email, password });

        res.status(201).json({
            message: "Register successful ✔️",
            user
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// =======================
// LOGIN API
// =======================
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found ❌" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Wrong password ❌" });
        }

        res.status(200).json({
            message: "Login successful ✔️",
            user
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// =======================
// SERVER START
// =======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});