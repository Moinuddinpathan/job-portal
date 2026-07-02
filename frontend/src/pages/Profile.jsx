import { useState } from "react";

function Profile() {

  const [resume, setResume] = useState();
const user = {
    name: "",
    email: "",
    phone: "",
  };
  

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
                  value=""
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
                  value=""
                  readOnly
                />
              </div>

 <div className="mb-3">
                <label className="form-label">
                  Phone
                </label>

                <input
                  type="text"
                  className="form-control"
                  value=""
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
                                </div>
                    </div>
                </div>
            </div>

        </div>
    )
}




export default Profile