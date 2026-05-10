

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const res = await axios.post("https://login-registration-form-2-8bh2.onrender.com/login", {
//                 email,
//                 password
//             });

//             console.log(res.data);

//             if (res.data === "Success") {
//                 alert("Login successful!");
//                 navigate("/home");
//             } else {
//                 alert("Invalid credentials");
//             }

//         } catch (err) {
//             console.log(err);
//             alert("Server error");
//         }
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100">
//             <div className="bg-white p-3 rounded" style={{ width: "40%" }}>
//                 <h2>Login</h2>

//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         className="form-control mb-2"
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />

//                     <input
//                         type="password"
//                         placeholder="Password"
//                         className="form-control mb-2"
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />

//                     <button className="btn btn-primary w-100" type="submit">
//                         Login
//                     </button>
//                 </form>

//                 <Link to="/register" className="btn btn-secondary w-100 mt-2">
//                     Register
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Login;






import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await axios.post(
                "https://login-registration-form-2-8bh2.onrender.com/login",
                {
                    email,
                    password
                }
            );

            console.log(res.data);

            if (res.data === "Success") {
                alert("Login successful!");
                navigate("/");
            } else {
                alert(res.data);
            }

        } catch (err) {
            console.log(err);
            alert("Server error");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">

            <div className="bg-white p-3 rounded" style={{ width: "40%" }}>

                <h2>Login</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control mb-2"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control mb-2"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        className="btn btn-primary w-100"
                        type="submit"
                    >
                        Login
                    </button>

                </form>

                <Link
                    to="/register"
                    className="btn btn-secondary w-100 mt-2"
                >
                    Register
                </Link>

            </div>

        </div>
    );
};

export default Login;