import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom"; // Import Navigate


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
        // Handle error, display error message, etc.
      });
  }, []);

  // Define function to navigate to EditProfile
 

  return (
    <div>
      <h1>User Profile</h1>
      {user && (
        <div>
          <p>Id: {user.userId}</p>
          <p>Name: {user.userName}</p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Age: {user.age}</p>
          {/* Add more input fields for other metadata */}
        </div>
      )}

    
    </div>
  );
};

export default UserProfile;
