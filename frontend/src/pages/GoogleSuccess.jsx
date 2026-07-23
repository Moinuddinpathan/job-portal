import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getProfile } from "../services/authService";

    function GoogleSuccess() {

       const { login } = useAuth()


        const navigate = useNavigate();

        useEffect(() => {
    const handleGoogleLogin = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      console.log("Token:", token);

      if (!token) {
        navigate("/login");
        return;
      }

                try {
        // Save token temporarily
        localStorage.setItem("token", token);

        // Fetch user profile
        const response = await getProfile();

        console.log("Profile Response:", response);
        
        // Save user + token in AuthContext
        login(response.user, token);

        // Redirect to Home
        navigate("/");
      } catch (error) {
        console.error(error);

        localStorage.removeItem("token");
        navigate("/login");
      }
    };
    handleGoogleLogin();
  }, [login, navigate]);

  return <h2>Signing you in...</h2>
        
}
  export default GoogleSuccess;