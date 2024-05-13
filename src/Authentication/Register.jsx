import { useState } from "react";
import { FaGooglePlusG } from "react-icons/fa6";

import "./Auth.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  // Initialize state to store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
  });

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target; // Get the name and value from the event target (input fields)
    setFormData({
      ...formData,
      [name]: value, // Update the corresponding state property based on the input name
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit behavior
    console.log("Form Data:", formData); // Here you could also send the data to a server, etc.
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/profile");
    // Additional registration logic goes here (e.g., validation, API calls)
  };

  return (
    <div className="auth">
      <h1>Create your account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div className="buttons">
          <button type="submit" className="submit">
            Sing Up
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

export default Register;
