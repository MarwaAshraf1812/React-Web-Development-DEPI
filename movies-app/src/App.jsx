import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import People from "./pages/People";
import Tv from "./pages/Tv";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { jwtDecode } from "jwt-decode";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PersonDetails from "./components/PersonDetails/PersonDetails";


export default function App() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      saveUserData();
    }
  }, []);

  function saveUserData() {
    let encode = localStorage.getItem("jwt");
    let decode = jwtDecode(encode);
    setUserData(decode);
  }
  
  function logOut() {
    setUserData(null);
    localStorage.removeItem("jwt");
    navigate("/login");
  }

  function ProtectedRoute({ children }) {
    if (!localStorage.getItem("jwt")) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
    <>
      <Navbar userData={userData} logOut={logOut} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/person-details/:id"
            element={
              <ProtectedRoute>
                <PersonDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie-details/:id"
            element={
              <ProtectedRoute>
                <MovieDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/people"
            element={
              <ProtectedRoute>
                <People />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tv"
            element={
              <ProtectedRoute>
                <Tv />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login saveUserData={saveUserData} />}
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}