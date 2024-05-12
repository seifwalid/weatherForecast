import { useState } from "react";
import { FaGooglePlusG } from "react-icons/fa6";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="auth">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
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
