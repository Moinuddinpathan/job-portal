import "./Stats.css"

function Stats() {
    const stats = [
       {
      number: "50,000+",
      title: "Jobs Available",
    },
    {
      number: "500+",
      title: "Companies",
    },
    {
      number: "10,000+",
      title: "Candidates",
    },
    {
      number: "95%",
      title: "Success Rate",
    },
    ];

    return(
        <section className="stats-section">
            <div className="stats-container">
                {
                    stats.map((item, index) => (
                        <div className="stat-card" key={index}>
                            <h2>{item.number}</h2>
                            <p>{item.title}</p>
                            </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Stats;