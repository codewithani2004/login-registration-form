
import React, { useState } from "react";
import axios from "axios";

function Auth() {

    const [isLogin, setIsLogin] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ================= LOGIN =================
    const handleLogin = () => {

        // axios.post("https://login-registration-form-3-jj64.onrender.com/login", {
        //     email,
        //     password

        axios.post("https://login-registration-form-2-8bh2.onrender.com/login", {
        email,
    password
})
        .then(res => {

            alert(res.data.message);

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

    // ================= REGISTER =================
    const handleRegister = () => {

        // axios.post("https://login-registration-form-3-jj64.onrender.com/register", {
        //     name,
        //     email,
        //     password
        axios.post("https://login-registration-form-2-8bh2.onrender.com/register", {
    name,
    email,
    password

        })

        .then(res => {
            alert(res.data.message);
            setIsLogin(true);
        })

        .catch(err => {
            console.log(err.response?.data || err.message);
            alert("Server error");
        });
    };

    return (
        <div style={styles.container}>

            <div style={styles.box}>

                <h2>
                    {isLogin ? "Login 🔐" : "Register 📝"}
                </h2>

                {!isLogin && (
                    <input
                        placeholder="Name"
                        style={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                )}

                <input
                    placeholder="Email"
                    style={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    style={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {isLogin ? (
                    <button style={styles.button} onClick={handleLogin}>
                        Login
                    </button>
                ) : (
                    <button style={styles.button} onClick={handleRegister}>
                        Register
                    </button>
                )}

                <p
                    onClick={() => setIsLogin(!isLogin)}
                    style={{ cursor: "pointer" }}
                >
                    {isLogin
                        ? "New user? Register here"
                        : "Already have account? Login here"}
                </p>

            </div>

        </div>
    );
}

// 🔥 SAME STYLES (NO CHANGE)
const styles = {

    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)"
    },

    box: {
        width: "320px",
        padding: "30px",
        background: "white",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
    },

    input: {
        width: "100%",
        padding: "10px",
        margin: "8px 0",
        borderRadius: "6px",
        border: "1px solid #ccc"
    },

    button: {
        width: "100%",
        padding: "10px",
        background: "#667eea",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        marginTop: "10px"
    }
};

export default Auth;