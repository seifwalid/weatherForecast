import { useEffect, useState } from "react";

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const temp = JSON.parse(localStorage.getItem("user"));
        setUser(temp);
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                {user?.uid && <p>Id: {user?.uid}</p>}
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
                <p>Gender: {user?.gender}</p>
                <p>Age: {user?.age}</p>
                {/* Add more input fields for other metadata */}
            </div>
        </div>
    );
};

export default UserProfile;
