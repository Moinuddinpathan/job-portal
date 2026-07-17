    import { useEffect, useState } from "react";
    import { getJobs, deleteJob } from "../services/adminService";


    function ManageJobs() {
        const [jobs, setJobs] = useState([])

        useEffect(() => {
            fetchJobs()
        }, [])

        const fetchJobs = async () => {
            try {
            const response = await getJobs();

            console.log(response.data);

            setJobs(response.data.jobs);
            
        } catch (error) {
            console.log(error);
            
        }
        }

        const handleDelete = async (id) => {

        if (!window.confirm("Delete this job?")) {
        return;
        }

        try {

        await deleteJob(id);

        alert("Job Deleted Successfully");

        fetchJobs();

        } catch (error) {

        console.log(error);

        alert("Delete Failed");

        }

    };

    return(
        <div className="container mt-4">

            <h2 className="mb-4">
            Manage Jobs
        </h2>

        <table className="table table-bordered">
            <thead>

            <tr>

                <th>Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Action</th>

            </tr>

            </thead>

            <tbody>
                {
                    jobs.map((job) => (
                        <tr key={job._id}>
                            <td>{job.title}</td>

                <td>{job.company}</td>

                <td>{job.location}</td>

                <td>{job.salary}</td>

                <td>

                    <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(job._id)}
                    >
                    Delete
                    </button>

                </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>

    )
    }

    export default ManageJobs;