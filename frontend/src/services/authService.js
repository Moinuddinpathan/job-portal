import api from "../api/axios";

export const sendOTP = async (email) => {
  return await api.post("/auth/send-otp", { email });
};

// Verify OTP
export const verifyOTP = async (email, otp) => {
  return await api.post("/auth/verify-otp", {
    email,
    otp,
  });
};

export const registerUser = (userData) => {
  return api.post("/auth/register", userData);
};

export const loginUser = (userData) => {
  return api.post("/auth/login", userData);
};





export const getProfile = () => {
  return api.get("/auth/profile");
};

export const logoutUser = ()=>{
  return api.post("/auth/logout");
}