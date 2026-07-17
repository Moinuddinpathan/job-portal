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
import ManageUsers from "./admin/ManageUsers";
import ManageJobs from "./admin/ManageJobs";
import Applications from "./admin/Applications";



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
        <Route path="/my-applications" element={<MyApplications />}/>
        <Route path="/apply/:id" element={<ApplyJob />}/>
        <Route path="/admin/dashboard" element={<Dashboard />}/>
        <Route path="/admin/users" element={<ManageUsers />}/>
        <Route path="/admin/jobs" element={<ManageJobs />}/>
        <Route path="/admin/applications" element={<Applications />}/>
      </Routes>
    </>
  );
}

export default App;