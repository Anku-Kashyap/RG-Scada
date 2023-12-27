import React, { useState, useEffect } from "react";
import HomePage from "../../Pages/HomePage";
import Modal from "react-modal";
import "./login.css";
import { useMyContext } from "../Context";

function Login(props) {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const { updateSharedValue } = useMyContext();

  const customStyles = {
    content: {
      width: "400px",
      margin: "auto",
      maxHeight: "20vh",
      color: "#090979",
      fontSize: "16px",
      border: "2px solid #3498db",
      borderRadius: "8px",
    },
  };

  const handleSubmit = () => {
    if (input === "Scada" && password === "admin123") {
      setLog(true);
      updateSharedValue(true);
      // props.setLog(true);
    } else {
      setPasswordError("Invalid Account OR Password.");
      openModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return log ? (
    <HomePage />
  ) : (
    <div className="login-form">
      <div class="container">
        <h1>Login to Scada</h1>
        <label for="email">
          <input
            type="email"
            id="email"
            placeholder="Username"
            onInput={(e) => setInput(e.target.value)}
            required
          />
        </label>
        <label for="password">
          <input
            type="password"
            id="password"
            placeholder="Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
            title="Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one digit."
            onInput={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Login Error"
        >
          <h2>Login Error</h2>
          <p>{passwordError}</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
        <label for="submit">
          <input
            type="submit"
            id="submit"
            value="Login"
            onClick={handleSubmit}
          />
        </label>
      </div>
    </div>
  );
}

export default Login;
