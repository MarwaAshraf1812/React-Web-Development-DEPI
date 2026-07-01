import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import joi from 'joi';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    rePassword: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function getData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validation() {
    const schema = joi.object({
      userName: joi.string().min(3).max(50).required(),
      dateOfBirth: joi.date().required(),
      email: joi.string().email({ tlds: { allow: false } }).required(),
      password: joi.string().min(6).max(50).required(),
      rePassword: joi.valid(joi.ref('password')).required().messages({
        'any.only': 'Passwords do not match'
      })
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
        console.log(validationErrors);
      });
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    axios.post("http://hawas.runasp.net/api/v1/Register", formData)
      .then(() => {
        setLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        setErrors({ api: err.response?.data?.message || 'An error occurred' });
        setLoading(false);
      });
  }

  return (
    <div className="w-75 mx-auto my-5">
      <h1 className="text-center">Register Now</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            name="userName"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            onChange={getData}
            value={formData.userName}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Date of birth</label>
          <input
            type="date"
            name="dateOfBirth"
            className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
            onChange={getData}
            value={formData.dateOfBirth}
          />
          {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            onChange={getData}
            value={formData.email}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            onChange={getData}
            value={formData.password}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="rePassword"
            className={`form-control ${errors.rePassword ? 'is-invalid' : ''}`}
            onChange={getData}
            value={formData.rePassword}
          />
          {errors.rePassword && <div className="invalid-feedback">{errors.rePassword}</div>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        {errors.api && <div className="alert alert-danger mt-3">{errors.api}</div>}
      </form>
    </div>
  );
}