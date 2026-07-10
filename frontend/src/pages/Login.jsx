import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";


function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    try {
    const response = await loginUser(formData);

    localStorage.setItem("token", response.data.token);

    alert("Login Successful");

    navigate("/");

  } catch (error) {
    alert(error.response?.data?.message || "Login Failed");
  }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-header bg-primary text-white text-center">
              <h3>Login</h3>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Email</label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-primary w-100">
                  Login
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;