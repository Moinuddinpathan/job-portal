import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});


API.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
});

API.interceptors.response.use((response) => response, async (error) => {

  console.log("401 intercepted");

    const originalRequest =  error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {

      originalRequest._retry = true;

      try {
console.log("Calling Refresh API...");

       

console.log("Calling refresh API...");
const res = await API.post("/auth/refresh-token");
console.log("Refresh Success");
console.log(res.data);
        const newAccessToken = res.data.accessToken;

        localStorage.setItem("token", newAccessToken);

        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

          console.log("Retrying Original Request");


        return API(originalRequest);

      } catch (err) {

        console.log("Refresh Failed", err);

        localStorage.removeItem("token");

        window.location.href = "/login";

      }

      }

      return Promise.reject(error);
})

export default API
