
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // 👉 local backend base URL
    const BASE_URL = "http://localhost:5000";

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post(
                `${BASE_URL}/register`,
                {
                    name,
                    email,
                    password
                }
            );

            console.log(res.data);

            if (res.data === "Already registered") {
                alert("E-mail already registered! Please Login.");
            } else {
                alert("Registered successfully!");
                navigate("/login");
            }

        } catch (err) {
            console.log(err);
            alert("Server error or backend not running");
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center text-center vh-100"
            style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}
        >

            <div className="bg-white p-3 rounded" style={{ width: '40%' }}>

                <h2 className='mb-3 text-primary'>Register</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="form-control mb-3"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="form-control mb-3"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="form-control mb-3"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="btn btn-primary w-100">
                        Register
                    </button>

                </form>

                <p className='mt-3'>Already have an account?</p>

                <Link to="/login" className="btn btn-secondary w-100">
                    Login
                </Link>

            </div>

        </div>
    );
};

export default Register;