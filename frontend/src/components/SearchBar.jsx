import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const handleSearch = () => {
    console.log({
      keyword,
      location,
      jobType,
    });

    // Later we'll connect this to the backend API
  };

  return (
    <section className="search-section">
      <div className="search-container">

        <input
          type="text"
          placeholder="Job title or keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="">Job Type</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>

        <button onClick={handleSearch}>
          Search Jobs
        </button>

      </div>
    </section>
  );
}

export default SearchBar;