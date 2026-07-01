import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import joi from 'joi';

export default function Login({saveUserData}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function getData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validation() {
    const schema = joi.object({
      email: joi.string().email({ tlds: { allow: false } }).required(),
      password: joi.string().min(6).max(50).required()
    });
    return schema.validate(formData, { abortEarly: false });
  }

  function submitHandler(e) {
    e.preventDefault();
    const { error } = validation();
    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    axios.post("http://hawas.runasp.net/api/v1/Login", formData)
      .then((res) => {
        // save token 
        localStorage.setItem("jwt", res.data.jwt)
        saveUserData();
        setLoading(false);
        navigate("/home");
      })
      .catch((error) => {
        setErrors({ api: error.response?.data?.message || 'An error occurred' });
        setLoading(false);
      });
  }

  return (
    <div className="w-75 mx-auto my-5">
      <h1 className="text-center">Login</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={getData}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter Email"
            value={formData.email}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={getData}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter Password"
            value={formData.password}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {errors.api && <div className="alert alert-danger mt-3">{errors.api}</div>}
      </form>
    </div>
  );
}
