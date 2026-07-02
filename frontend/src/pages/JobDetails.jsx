import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function JobDetails() {

    const { id } = useParams();

    return (


        <div className="container mt-5">
            <div className="card-shadow">
                <div className="card-body">


                    <h2>
                        Software Developer
                    </h2>

                    <h5 className="text-primary">
                        Amazon
                    </h5>

                    <hr />

                    <p>
                        <strong>Location :</strong> India
                    </p>

                    <p>
                        <strong>Salary :</strong> ₹3 LPA
                    </p>
                    <p>
                        <strong>Experience :</strong> 1-2 Years
                    </p>
                    <p>
                        <strong>Skills :</strong>
                        React, JavaScript, HTML, CSS
                    </p>
                    <p>
                        <strong>Description :</strong>
                        We are looking for a Frontend Developer who has
                        knowledge of React.js, JavaScript, HTML and CSS.
                        The candidate should be able to build responsive
                        web applications.
                    </p>
                    <Link
                    to={`/apply/${JobDetails.id}`}
                    className="btn btn-success">Apply Now
    
                    </Link>


                </div>
            </div>
        </div>


    )
}




export default JobDetails