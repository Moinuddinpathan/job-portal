import { useEffect, useState } from "react";
import { getMyApplications } from "../services/applicationService";


function MyApplications() {

    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        fetchApplications()
    }, [])
  

    const fetchApplications = async () => {
        try {
            const response = await getMyApplications();

      setApplications(response.data.application);
        } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to load applications");
    } finally {
      setLoading(false);
    }
    }

    if (loading) {
    return (
      <div className="container mt-5">
        <h3 className="text-center">Loading Applications...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <h2 className="mb-4">My Applications</h2>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">

         <tr>
    <th>Job Title</th>
    <th>Company</th>
    <th>Status</th>
    <th>Applied On</th>
</tr>
        </thead>

        <tbody>

          {
                applications.length > 0 ? (
                    applications.map((app) => (
                         <tr key={app._id}>

                <td>{app.job?.title}</td>

                <td>{app.job?.company}</td>

                <td>
                    <span
  className={`badge ${
    app.status === "Pending"
      ? "bg-warning text-dark"
      : app.status === "Reviewed"
      ? "bg-info"
      : app.status === "Selected"
      ? "bg-success"
      : "bg-danger"
  }`}
>
  {app.status}
</span>
                </td>
                <td>{app.resume}</td>

              </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4"  className="text-center">
                            No Application Found
                        </td>
                    </tr>
                )
          }

        </tbody>

      </table>

    </div>
  );
}

export default MyApplications;