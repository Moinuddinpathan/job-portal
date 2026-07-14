import api from "./api";

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





export const getProfile = ()=>{
  const token = localStorage.getItem("token");

  return api.get("/auth/profile", {
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
}

export const logoutUser = ()=>{
  localStorage.removeItem("token")
}