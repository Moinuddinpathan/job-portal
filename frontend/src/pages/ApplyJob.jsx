import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { applyJob } from "../services/applicationService";

function ApplyJob(){

    const [resume, setResume]= useState("");

    const navigate = useNavigate();
    const { id } = useParams();
const handleSubmit =async (e)=>{
    e.preventDefault();

      console.log("Job ID:", id);
  console.log("Resume:", resume);


   try {
    await applyJob({
        job: id,
        resume,
    });

     alert("Application Submitted Successfully");

      navigate("/my-applications");

   } catch (error) {
  console.log(error.response);
  alert(error.response?.data?.message || error.message);
}
        
};


    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow">


            <div className="card-header bg-primary text-while text-center ">
                <h3>Apply Job</h3>
            </div>

            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            Upload Resume (PDF)
                        </label>

                        <input
  type="file"
  className="form-control"
  accept=".pdf"
  onChange={(e) => setResume(e.target.files[0]?.name)}
/>
                    </div>

                    <button className="btn btn-success w-100">
                        Apply Now
                    </button>
                </form>
            </div>

                </div>
            </div>
        </div>
        </div>
    )
}



export default ApplyJob