import api from "./api";

export const loginUser = (userData) => {
  return api.post("/auth/login", userData);
};

export const registerUser = (userData) => {
  return api.post("/auth/register", userData);
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