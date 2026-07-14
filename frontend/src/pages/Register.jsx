import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import {
  sendOTP,
  verifyOTP,
  registerUser,
} from "../services/authService";


function Register() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

const [otpSent, setOtpSent] = useState(false);

const [otpVerified, setOtpVerified] = useState(false);

const [loading, setLoading] = useState(false);


    const handleSendOTP = async () => {
      if (!formData.email) {
        return alert("Enter Email");
      }

      try {
        setLoading(true);

        const res = await sendOTP(formData.email);

        alert(res.data.message);

        setOtpSent(true);

      } catch (error) {
  console.log(error);
  alert(error.response?.data?.message || error.message || "Something went wrong");
} finally {
        setLoading(false);
      }
    }

    const handleVerifyOTP = async () => {
  if (!otp) {
    return alert("Enter OTP");
  }

  try {
    setLoading(true);

    const res = await verifyOTP(formData.email, otp);

    alert(res.data.message);

    setOtpVerified(true);

  } catch (error) {
  console.log(error);
  alert(error.response?.data?.message || error.message || "Something went wrong");
} finally {

    setLoading(false);

  }
};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpVerified) {
  alert("Please verify your OTP first");
  return;
}

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await registerUser({
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  password: formData.password,
});

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

      setOtp("");
setOtpSent(false);
setOtpVerified(false);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">

            <div className="card-header bg-success text-white text-center">
              <h3>Create Account</h3>
            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Full Name</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
  <label className="form-label">Email</label>

  <div className="input-group">
    <input
      type="email"
      className="form-control"
      placeholder="Enter Email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />

    <button
      type="button"
      className="btn btn-primary"
      onClick={handleSendOTP}
      disabled={loading}
    >
      {loading ? "Sending..." : "Send OTP"}
    </button>
  </div>
</div>
{otpSent && (
  <div className="mb-3">
    <label className="form-label">OTP</label>

    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button
        type="button"
        className="btn btn-success"
        onClick={handleVerifyOTP}
      >
        Verify OTP
      </button>
    </div>
  </div>
)}

                <div className="mb-3">
                  <label className="form-label">Phone</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>

                <button
  type="submit"
  className="btn btn-success w-100"
  disabled={!otpVerified}
>
  {otpVerified ? "Create Account" : "Verify OTP First"}
</button>

              </form>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;