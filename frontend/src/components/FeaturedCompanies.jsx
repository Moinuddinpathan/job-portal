import "./FeaturedCompanies.css";

const companies = [
  {
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    jobs: "120 Open Jobs",
  },
  {
    name: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    jobs: "85 Open Jobs",
  },
  {
    name: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    jobs: "150 Open Jobs",
  },
  {
    name: "Infosys",
    logo: "https://logo.clearbit.com/infosys.com",
    jobs: "95 Open Jobs",
  },
];

function FeaturedCompanies() {
  return (
    <section className="companies-section">
      <div className="container">

        <h2>Featured Companies</h2>
        <p>Top companies hiring through HireHub</p>

        <div className="company-grid">
          {companies.map((company, index) => (
            <div className="company-card" key={index}>
              <img src={company.logo} alt={company.name} />
              <h4>{company.name}</h4>
              <span>{company.jobs}</span>
              <button>View Jobs</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedCompanies;