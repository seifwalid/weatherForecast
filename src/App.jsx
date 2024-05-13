import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "./Components/NavBar";
import Home from "./Home/Home";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import ResetPassword from "./Authentication/ResetPassword";
import NotFound from "./Components/NotFound";
import SearchPage from "./Components/SearchPage";
import AirQualityChart from "./Components/AirQualityChart";
import UserProfile from "./Pages/UserProfile2";

import "./App.css";
import EditUserForm from "./Pages/UpdateUser";

function App() {
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const parsedUser = JSON.parse(user);
            console.log(parsedUser);
        }
    }, []);
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/graph' element={<AirQualityChart />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/ResetPassword' element={<ResetPassword />} />
                    <Route path='/profile' element={<UserProfile />} />
                    <Route path='/profile/edit' element={<EditUserForm />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Toaster
                position='top-center'
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)",
                    },
                }}
            />
        </>
    );
}

export default App;
