import { useState } from "react";

function ApplyJob(){

    const [resume, setResume]= useState(null);
const handleSubmit = (e)=>{
    e.preventDefault();

    if(!resume){
        alert("please upload resume ")
        return;
        }

        alert("Application Submitted")

        console.log(resume);
        
}   


    return (
        <div className="container mt-5">\
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
                        onChange={(e)=>setResume(e.target.files[0])}
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