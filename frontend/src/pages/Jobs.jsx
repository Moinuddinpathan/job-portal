import { useEffect, useState } from "react";
import JobCard from "../components/JobCard"
import API from "../api/axios";

function Jobs(){


    const [job, setJobs]= useState([])

    useEffect(()=>{
        const fetchJobs = async () => {
            try{
                const res = await API.get("/jobs");
                setJobs(res.data);
            } catch (error) {
                console.log(error);
                
            }
        };

        fetchJobs();
    }, [])

    const jobs=[
        {
            id: 1,
            title: "Software Developer",
            company: "Amazon",
            location: "India",
            salary: "3 LPA",
        },
        {
            id: 2,
            title: "Mern Stack Developer",
            company: "Infosys",
            location: "Pune",
            salary: "6 LPA",
        },
        {
            id: 3,
            title: "Software Engineer",
            company: "Flipkart",
            location: "Banglore",
            salary: "5 LPA",
        },
        

    ]

    return(
       <div className="container mt-5">

        <h2 className="text-center mb-4">Available Jobs</h2>

        <div className="row">
            {
                jobs.map((job)=>(
                    <div className="col-md-4 mb-4" key={job.id}>
                        <JobCard job={job}/>
                        </div>
                ))
            }
        </div>
       </div>
    );
}

export default Jobs