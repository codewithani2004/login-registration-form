// const cors = require('cors');
// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const FormDataModel = require('./models/FormData');
// const app = express();
// const port = 3001;
// dotenv.config();  // load .env
// app.use(express.json());
// app.use(cors({
//     origin: true
// }))

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));

// // Register endpoint
// app.post('/register', (req, res) => {
//     const { email, password } = req.body;
//     FormDataModel.findOne({ email })
//         .then(user => {
//             if (user) res.json("Already registered");
//             else {
//                 FormDataModel.create(req.body)
//                     .then(stu_reg => res.json(stu_reg))
//                     .catch(err => res.json(err));
//             }
//         });
// });

// // Login endpoint
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     FormDataModel.findOne({ email })
//         .then(user => {
//             if (user) {
//                 if (user.password == password) res.json("Success");
//                 else res.json("Wrong password");
//             } else res.json("No records found!");
//         });
// });
// app.get('/check',(req,res)=>{
//     res.send("okay")
// })
// // Start server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server listening on http://127.0.0.1:${PORT}`);
// });

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const FormDataModel = require('./models/FormData');

const app = express();

// Load .env
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors({ origin: true }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error:", err));

// Register endpoint
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    FormDataModel.findOne({ email })
        .then(user => {
            if (user) return res.json("Already registered");

            FormDataModel.create({ email, password })
                .then(stu_reg => res.json(stu_reg))
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    FormDataModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) res.json("Success");
                else res.json("Wrong password");
            } else {
                res.json("No records found!");
            }
        })
        .catch(err => res.json(err));
});

// Test route
app.get('/check', (req, res) => {
    res.send("okay");
});

// Start server (PORT FIXED)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on ${PORT}`);
});