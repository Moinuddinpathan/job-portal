function MyApplications(){

    const applications = [
        {
      id: 1,
      job: "React Developer",
      company: "Google",
      status: "Pending",
    },
    {
      id: 2,
      job: "MERN Stack Developer",
      company: "Amazon",
      status: "Selected",
    },
  
];

    return(

        <div className="container mt-5">
            <h2 className="mb-4">My Application </h2>

            <table className="table table-bordered table-striped">
                <thead className="tabel-dark">
                    <tr>
                        <th>
                            Job Title 
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Company 
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Status
                        </th>
                    </tr>
                </thead>


                <tbody>
                    {applications.map((app)=>(
                        <tr key={app.id}>
                            <td>{app.job}</td>
                            <td>{app.company}</td>
                            <td>{app.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default MyApplications;