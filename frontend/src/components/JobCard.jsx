import { Link } from "react-router-dom";

function JobCard({job}) {
    return(
        <div className="card-shadow h-100">
            <div className="card-body">
                <h4>{job.title}</h4>
                <h5 className="text-primary">{job.company}</h5>
                <p>
                    <strong>Location:</strong>{job.location}
                </p>

                <p>
                    <strong>Salary:</strong>{job.salary}
                </p>

                <Link
                to={`/jobs/${job._id}`}
                className="btn btn-primary w-100">
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default JobCard