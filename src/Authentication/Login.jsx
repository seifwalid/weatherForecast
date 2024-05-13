import { useState } from "react";
import { FaGooglePlusG } from "react-icons/fa6";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
    const user = {
      uid: 1,
      name: "ahmed senousy",
      email: "ahmedsenousy@gmail.com",
      age: 22,
      gender: "male",
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/profile");
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
