

import React from "react";

function Home() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        window.location.href = "/";
        return null;
    }

    const logout = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>

                <div style={styles.badge}>✔ Logged In</div>

                <h1 style={styles.title}>
                    Welcome, {user?.name} 🎉
                </h1>

                <p style={styles.text}>
                    You have successfully entered the dashboard
                </p>

                <button onClick={logout} style={styles.button}>
                    🚪 Logout
                </button>

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
        background: "linear-gradient(135deg, #dbeafe, #93c5fd)"
    },
    card: {
        padding: "40px",
        background: "white",
        borderRadius: "16px",
        textAlign: "center",
        boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
        position: "relative",
        width: "320px"
    },
    badge: {
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "#22c55e",
        color: "white",
        padding: "5px 10px",
        borderRadius: "20px",
        fontSize: "12px"
    },
    title: {
        marginBottom: "10px",
        color: "#1e3a8a"
    },
    text: {
        marginBottom: "20px",
        color: "#555"
    },
    button: {
        padding: "10px 20px",
        background: "#ef4444",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px"
    }
};

export default Home;