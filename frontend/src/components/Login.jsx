// import React, { useState } from "react";
// import axios from "axios";

// function Login() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//  const handleLogin = () => {
//     axios.post("https://login-registration-form-3-jj64.onrender.com/login", {
//         email,
//         password
//     })
//     .then(res => {
//         if (res.data.message === "Login successful") {
//             localStorage.setItem("user", JSON.stringify(res.data.user));
//             window.location.href = "/home";
//         } else {
//             alert(res.data.message);
//         }
//     })
//     .catch(err => {
//         console.log(err);
//         alert("Server error");
//     });
// };
//     return (
//         <div style={styles.container}>
//             <div style={styles.box}>

//                 <h2>Login 🔐</h2>

//                 <input
//                     placeholder="Email"
//                     style={styles.input}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <input
//                     type="password"
//                     placeholder="Password"
//                     style={styles.input}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />

//                 <button style={styles.button} onClick={handleLogin}>
//                     Login
//                 </button>

//                 <p onClick={() => window.location.href = "/register"} style={{ cursor: "pointer" }}>
//                     New user? Register
//                 </p>

//             </div>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(135deg, #667eea, #764ba2)"
//     },
//     box: {
//         width: "300px",
//         padding: "25px",
//         background: "white",
//         borderRadius: "10px",
//         textAlign: "center"
//     },
//     input: {
//         width: "100%",
//         padding: "10px",
//         margin: "8px 0"
//     },
//     button: {
//         width: "100%",
//         padding: "10px",
//         background: "#667eea",
//         color: "white",
//         border: "none"
//     }
// };

// export default Login;




import React, { useState } from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        axios.post("https://login-registration-form-3-jj64.onrender.com/login", {
            email,
            password

        })
        .then(res => {

            alert(res.data.message);

            // 🔥 FIXED: correct check
            if (res.data.message.includes("Login successful")) {

                localStorage.setItem("user", JSON.stringify(res.data.user));

                window.location.href = "/home";

            }

        })
        .catch(err => {
            console.log(err.response?.data || err.message);
            alert("Server error");
        });
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>

                <h2>Login 🔐</h2>

                <input
                    placeholder="Email"
                    style={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    style={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button style={styles.button} onClick={handleLogin}>
                    Login
                </button>

                <p
                    onClick={() => window.location.href = "/register"}
                    style={{ cursor: "pointer" }}
                >
                    New user? Register
                </p>

            </div>
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    box: {
        width: "300px",
        padding: "25px",
        background: "white",
        borderRadius: "10px",
        textAlign: "center"
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "8px 0"
    },
    button: {
        width: "100%",
        padding: "10px",
        background: "#667eea",
        color: "white",
        border: "none"
    }
};

export default Login;