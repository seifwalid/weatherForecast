import { useState } from "react";
import { FaGooglePlusG } from "react-icons/fa6";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5071/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const user = await response.json();

      localStorage.setItem("user", JSON.stringify(user));
      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error, display error message, etc.
    }
  };

  return (
    <div className="auth">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="buttons">
          <button type="submit" className="submit">
            Log in
          </button>
          <button type="submit" className="google">
            Gmail
            <FaGooglePlusG className="buttonIcon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
