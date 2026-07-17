import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { getDashboard } from "../services/adminService";


function Dashboard(){

    
const [dashboard, setDashboard] = useState({
     totalUsers: 0,
  totalJobs: 0,
  totalApplications: 0,
})

useEffect(()=>{
    fetchDashboard();
}, [])

const fetchDashboard = async () => {
    try {
        const response = await getDashboard();
        console.log(response.data);
setDashboard({
  totalUsers: response.data.dashboard.totalUsers,
  totalJobs: response.data.dashboard.totalJobs,
  totalApplications: response.data.dashboard.totalApplications,
});
    } catch (error) {
        console.log(error);
        alert("Failed to Load Dashboard")
    }
};

    return (

         <div className="container mt-5">

      <h2 className="text-center mb-4">
        Admin Dashboard
      </h2>

      <div className="row">

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Total Users</h5>
              <h1>{dashboard.totalUsers}</h1>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Total Jobs</h5>
              <h1>{dashboard.totalJobs}</h1>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Total Applications</h5>
              <h1>{dashboard.totalApplications}</h1>
            </div>
          </div>
        </div>

      </div>

      <div className="row mt-4">

        <div className="col-md-4">
          <Link
            to="/admin/users"
            className="btn btn-primary w-100"
          >
            Manage Users
          </Link>
        </div>

        <div className="col-md-4">
          <Link
            to="/admin/jobs"
            className="btn btn-success w-100"
          >
            Manage Jobs
          </Link>
        </div>

        <div className="col-md-4">
          <Link
            to="/admin/applications"
            className="btn btn-warning w-100"
          >
            Manage Applications
          </Link>
        </div>

      </div>

    </div>
    )
} 





export default Dashboard;