import { useEffect, useState } from "react";
import './editprofile.css'
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        gender: "",
        age: "",
        password: ""
    });

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("user"))?.userId;
        if (!userId) return;

        fetch(`http://localhost:5071/api/user/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                return response.json();
            })
            .then(userData => {
                setUser(userData);
                setFormData({
                    userName: userData.userName,
                    email: userData.email,
                    gender: userData.gender,
                    age: userData.age,
                    password: userData.password
                });
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
                // Handle error, display error message, etc.
            });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const userId = JSON.parse(localStorage.getItem("user"))?.userId;
        if (!userId) return;

        fetch(`http://localhost:5071/api/user/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: formData.userName,
                password: formData.password,
                age: formData.age
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to update user data");
            }
            navigate("/profile");
            // Optionally, handle success response
        })
        .catch(error => {
            console.error("Error updating user data:", error);
            // Handle error, display error message, etc.
        });
    };

    return (
        <div className="auth">
      <h1> Edit your account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
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
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        {/* Email and gender fields are disabled */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled // Disabling the input field
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            disabled // Disabling the input field
          />
        </div>
        <div className="buttons">
          <button type="submit" className="submit">
            Edit
          </button>
          
        </div>
      </form>
    </div>
    );
};

export default EditProfile;
