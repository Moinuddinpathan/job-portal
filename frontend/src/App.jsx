import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobCard from "./components/JobCard";
import Jobs from "./pages/Jobs";
import JobsDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";
import Dashboard from "./admin/Dashboard";
import MyApplications from "./pages/MyApplications";
import ApplyJob from "./pages/ApplyJob";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />}/>
        <Route path="/jobs/:id" element={<JobsDetails/>}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/admin" element={<Dashboard />}/>
        <Route path="/my-application" element={<MyApplications />}/>
        <Route path="/apply/:id" element={<ApplyJob />}/>
      </Routes>
    </>
  );
}

export default App;