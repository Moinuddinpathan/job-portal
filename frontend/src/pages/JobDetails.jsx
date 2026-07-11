import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobById } from "../services/jobService";

function JobDetails() {

    const { id } = useParams();

    const [job, setJob] = useState(null);

    useEffect(()=>{
        fetchJob();
    }, [])

    const fetchJob = async () => {
        try {
            const response = await getJobById(id);

            setJob(response.data.job);
        } catch (error) {
            console.log(error);
        }
    };

    if(!job){
        return <h2 className="text-center mt-5">Loading...</h2>;
    }



    return (


        <div className="container mt-5">
            <div className="card-shadow">
                <div className="card-header bg-primary text-white">


                    <h2>
                        {job.title}
                    </h2>
                    <div className="card-body">
                        <h4 className="text-success" >{job.company}</h4>
                    </div>
<hr/>

 <p>
            <strong>Location :</strong> {job.location}
          </p>

          <p>
            <strong>Salary :</strong> {job.salary}
          </p>

          <p>
            <strong>Experience :</strong> {job.experience}
          </p>

          <p>
            <strong>Skills :</strong> {job.skills}
          </p>

          <p>
            <strong>Description :</strong>
          </p>

          <p>{job.description}</p>


                    <Link
                    to={`/apply/${job._id}`}
                    className="btn btn-success">Apply Now
    
                    </Link>


                </div>
            </div>
        </div>


    )
}




export default JobDetails