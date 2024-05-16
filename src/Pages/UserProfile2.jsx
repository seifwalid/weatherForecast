import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom"; // Import Navigate
import "./UserProfile2.css";

const UserProfile = () => {
    
    const [user, setUser] = useState(null);



  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"))?.userId;
    console.log(userId);
    if (!userId) return;

    fetch(`http://localhost:5071/api/user/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        
      });
  }, []);

 

  return (
    <div className="page"><div class="profileCard profileCard--modern">
    <h1>User Profile</h1>
    {user && (
       <div className="profileInfo">
        <h3>ID:</h3>
        <p>{user.userId}</p>
        <h3>Name:</h3>
        <p>{user.userName}</p>
        <h3>Email:</h3>
        <p>{user.email}</p>
        <h3>Gender:</h3>
        <p>{user.gender}</p>
        <h3>Age:</h3>
        <p>{user.age}</p>
        
        {/* Add more input fields for other metadata */}
      </div>
    )}
  </div></div>
    
  );
};

export default UserProfile;
