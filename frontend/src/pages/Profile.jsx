import { useState, useEffect } from "react";
import { getProfile, logoutUser } from "../services/authService"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Profile() {


  const navigate = useNavigate();
  const { logout } = useAuth();
  
const [resume, setResume] = useState();
const [user, setUser] = useState({
  name:"",
  email:"",

})
  
useEffect(()=>{
  fetchProfile();
}, [])

const handleLogout = async ()=>{
   try {

    await logoutUser();
    logout();    
    alert("Logged Out Successfully");
    navigate("/login");

  } catch (error) {
    console.log(error.response);
  console.log(error.response?.data);
  }
}
const fetchProfile = async () => {
  try{
    const response = await getProfile();

    setUser(response.user);
  } catch (error) {
    console.log(error);
    
  }
}

  const handleUpload = () => {

  if (!resume) {
    alert("Please select a resume first!");
    return;
  }

  alert("Resume Uploaded Successfully");
};

    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h3>My Profile</h3>
                                </div> 
                                <div className="card-body">
                                    <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={user.name}
                  readOnly
                />
              </div>

               <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  value={user.email}
                  readOnly
                />
              </div>

 

              <div className="mb-3">
                <label className="form-label">
                  Upload Resume
                </label>

                <input
                  type="file"
                  className="form-control"
                  accept=".pdf"
                  onChange={(e)=>setResume(e.target.files[0])}
                />
              </div>

<button className="btn btn-success" onClick={handleUpload}>
    Upload Resume
</button>

<button className="btn btn-danger" onClick={handleLogout}>
    Logout
  </button>
                                </div>
                    </div>
                </div>
            </div>

        </div>
    )
}




export default Profile