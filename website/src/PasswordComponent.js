import React, { useState } from "react";

const PasswordComponent = ({ handlePasswordSubmit, correctPassword, otherPasswordSubmit, otherCorrectPassword }) => {
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (password === correctPassword) {
            handlePasswordSubmit();
        }
		else if (password === otherCorrectPassword) {
			otherPasswordSubmit();
		}
    };

    return (
        <div
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "300px",
                height: "300px",
                backgroundColor: "#0f6197", // Blue background color
                border: "1px solid #ccc",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                zIndex: 999,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Arial, sans-serif", // Use your desired font
                color: "white", // Text color
            }}
        >
            <h2 style={{ marginBottom: "20px" }}>Enter the Password</h2>
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                    width: "80%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginBottom: "20px",
                }}
            />
            <button
                onClick={handleSubmit}
                style={{
                    backgroundColor: "#2980b9", // Button color
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
					fontSize: '16px'
                }}
            >
                Submit
            </button>
        </div>
    );
};

export default PasswordComponent;
