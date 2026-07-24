import "./LatestJobs.css";



function LatestJobs(){

    const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Mumbai",
    salary: "₹8 - ₹12 LPA",
    type: "Full Time",
    logo: "https://logo.clearbit.com/google.com",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Bangalore",
    salary: "₹10 - ₹15 LPA",
    type: "Remote",
    logo: "https://logo.clearbit.com/microsoft.com",
  },
  {
    id: 3,
    title: "React Developer",
    company: "Amazon",
    location: "Hyderabad",
    salary: "₹7 - ₹11 LPA",
    type: "Internship",
    logo: "https://logo.clearbit.com/amazon.com",
  },
];




    return(
       <section className="latest-jobs">
        <div className="container">
              <h2>Latest Jobs</h2>
        <p>Explore the newest opportunities from top companies.</p>

            <div className="jobs-grid">
                {
                    jobs.map((job) => (
                        <div className="job-card" key={job.id}>
                            <img src={job.logo} alt={job.company} />

                             <h3>{job.title}</h3>

              <h5>{job.company}</h5>

              <p>📍 {job.location}</p>

              <p>💰 {job.salary}</p>

              <span>{job.type}</span>

              <button>Apply Now</button>

              </div>
                    ))
                }
            </div>
        </div>
       </section>
    )
}

export default LatestJobs;