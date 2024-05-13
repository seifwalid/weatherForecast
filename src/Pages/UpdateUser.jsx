import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUserForm = () => {
    const navigate = useNavigate();
    const [uid, setUid] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    useEffect(() => {
        const temp = JSON.parse(localStorage.getItem("user"));
        if(!temp) navigate("/login");
        setUid(temp?.uid);
        setName(temp?.name);
        setEmail(temp?.email);
        setGender(temp?.gender);
        setAge(temp?.age);
    }, []);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleGenderChange(event) {
        setGender(event.target.value);
    }

    function handleAgeChange(event) {
        setAge(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem(
            "user",
            JSON.stringify({
                uid,
                name,
                email,
                age,
                gender,
            })
        );
        navigate("/profile");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div>
                <label>Age:</label>
                <input type='number' value={age} onChange={handleAgeChange} />
            </div>
            <div>
                <label>Gender:</label>
                <input
                    type='text'
                    value={gender}
                    onChange={handleGenderChange}
                />
            </div>
            <button type='submit'>Update</button>
        </form>
    );
};

export default EditUserForm;
