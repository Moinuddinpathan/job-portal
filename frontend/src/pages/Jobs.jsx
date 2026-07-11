import { useEffect, useState } from "react";
import JobCard from "../components/JobCard"
import { getJobs } from "../services/jobService";

function Jobs(){


    const [jobs, setJobs]= useState([])
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        fetchJobs();
    }, [])

    const fetchJobs = async () => {
        try {
            const response = await getJobs();

            setJobs(response.data.jobs)
        } catch(error) {
            console.log("Error fetching jobs:",error);
        } finally {
            setLoading(false);
        }
    };


    if(loading) {
        return (
            <div className="container mt-5">
                <h3 className="text-center" >Loading Jobs...</h3>
            </div>
        );
    }
   



    

    return(
       <div className="container mt-5">
        <h2 className="text-center mb-4">
            Available Jobs
        </h2>
        <div className="row">
            {
                jobs.length > 0 ? (
                    jobs.map((job) => (
                        <div className="col-md-4 mb-4" key={job._id} >
                            <JobCard job={job} />
                        </div>
                    ))
                ) : (
                    <div className="text-center">
            <h4>No Jobs Available</h4>
          </div>
                )
            }
        </div>
       </div>
    );
}

export default Jobs