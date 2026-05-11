
import React, { useState } from "react";
import axios from "axios";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        axios.post("https://login-registration-form-3-jj64.onrender.com/register", {
            name,
            email,
            password
    
    
        })
        .then(res => {

            alert(res.data.message);

            // 🔥 optional safety check
            if (res.data.message.includes("Register successful")) {
                window.location.href = "/login";
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

                <h2>Register 📝</h2>

                <input
                    placeholder="Name"
                    style={styles.input}
                    onChange={(e) => setName(e.target.value)}
                />

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

                <button style={styles.button} onClick={handleRegister}>
                    Register
                </button>

                <p
                    onClick={() => window.location.href = "/login"}
                    style={{ cursor: "pointer" }}
                >
                    Already user? Login
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

export default Register;