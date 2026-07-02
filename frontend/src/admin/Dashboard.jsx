import { Link } from "react-router-dom"

function Dashboard(){
    return (

        <div className="container mt-5">

            <h2 className="text-center mb-4">
                Admin Dashboard
            </h2>

            <div className="row">


                <div className="col-md-4 mb-4">
                    <div className="card shadow text-center">
                        <div className="card-body">

                            <h3>3</h3>

                            <p>Total Jobs</p>
                        </div>
                    </div>
                </div>

         <div className="col-md-4 mb-4">
            <div className="card shadow text-center">
                <div className="card-body">
                    <h3>20</h3>

                    <p>Total Users</p>
                </div>
            </div>
         </div>

         <div className="col-md-4 mb-4">
          <div className="card shadow text-center">
            <div className="card-body">

              <h3>56</h3>

              <p>Applications</p>

            </div>
          </div>
        </div>
</div>

<div className="text-center">
    <Link to="/admin/add-job" className="btn btn-primary me-3">
    Add Job
    </Link>

    <Link to="/admin/manage-jobs" className="btn btn-success">
    Manage Jobs
    </Link>

            </div>
        </div>
    )
} 





export default Dashboard;