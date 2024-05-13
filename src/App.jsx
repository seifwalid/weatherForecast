import React from "react";
import "./App.css";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/" element={<Home />} />
          <Route path="/graph" element={< AirQualityChart/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
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
