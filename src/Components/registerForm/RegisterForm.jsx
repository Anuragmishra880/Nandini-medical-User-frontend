import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const emailValidator = (email) => {
    let at = email.indexOf("@");
    let dot = email.lastIndexOf(".");

    if (!email || at < 1 || dot < at + 2 || dot === email.length - 1) {
      return false;
    }

    return true;
  };
  const validate = () => {
    let newErrors = {};

    if (!formData.userName.trim()) newErrors.userName = "Username required";

    if (!emailValidator(formData.email)) {
      newErrors.email = "Please enter a valid Email";
    }
    if (formData.password.length < 6)
      newErrors.password = "Min 6 chars password";

    if (formData.password !== formData.cnfPassword)
      newErrors.cnfPassword = "Passwords not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/v1/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({
          //   userName: formData.userName,
          //   email: formData.email,
          //   password: formData.password,
          // }),
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Registered Successfully 😄");
        setFormData({ userName: "", email: "", password: "", cnfPassword: "" });
        navigate("/login");
      } else {
        toast.error(data.message || "Error occurred");
      }
    } catch (error) {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <h3 className="mb-4 text-center text-primary fw-bold">
              Create Account
            </h3>

            {/* Username */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className={`form-control ${errors.userName ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.userName}</div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.password}</div>
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="cnfPassword"
                value={formData.cnfPassword}
                onChange={handleChange}
                className={`form-control ${errors.cnfPassword ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.cnfPassword}</div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>

            {/* Extra link */}
            <p className="text-center mt-3 mb-0">
              Already have an account?{" "}
              <NavLink to="/login" className="text-decoration-none">
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
