import { useEffect, useState } from "react";
import {
  getApplications,
  updateApplicationStatus,
} from "../services/adminService";
import AdminNavbar from "../components/AdminNavbar";

function Applications() {

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {

      const response = await getApplications();

      setApplications(response.data.applications);

    } catch (error) {

      console.log(error);

    }
  };

  const changeStatus = async (id, status) => {

    try {
        await updateApplicationStatus(id, status);
        
        alert("Application Updated");

        fetchApplications();
    } catch (error) {
        console.log(error);

        alert("Update Failed")
        
    }
  }

   return (
    <>
    <AdminNavbar />
    <div className="container mt-4">
        <h2 className="mb-4">
        Manage Applications
      </h2>

      <table className="table table-bordered">
         <thead>

          <tr>

            <th>Applicant</th>
            <th>Job</th>
            <th>Status</th>
            <th>Change Status</th>

          </tr>

        </thead>

            <tbody>
                {
                    applications.map((app) => (
                        <tr key={app._id}>
                            <td>{app.user?.name}</td>

              <td>{app.job?.title}</td>

              <td>{app.status}</td>

              <td>
                <select className="form-select"
                value={app.status}
                onChange={(e) => changeStatus(app._id, e.target.value)
                }>
                    <option value="Pending">Pending</option>
<option value="Reviewed">Reviewed</option>
<option value="Selected">Selected</option>
<option value="Rejected">Rejected</option>

                </select>
              </td>
                        </tr>
                    ))
                }
            </tbody>
      </table>
    </div>
    </>
)
}

export default Applications;