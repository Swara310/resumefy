
import React from 'react';
import '../styles/DashboardPage.css';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>User Dashboard</h1>
        <p>Manage your resumes and track performance analytics</p>
      </header>

      <nav className="dashboard-nav">
        <button onClick={() => navigate('/create-resume')}>Create New Resume</button>
        <button onClick={() => navigate('/analytics')}>View Analytics</button>
        <button onClick={() => navigate('/settings')}>Account Settings</button>
      </nav>

      <main className="dashboard-content">
        <section className="dashboard-section">
          <h2>Welcome Back!</h2>
          <p>Continue building and updating your resume. Make the most out of your professional profile.</p>
        </section>

        <section className="dashboard-section">        
          <h2>Your Resumes</h2>
          <ul className="resume-list">
            <li>Resume 1 - <span>Last updated: Oct 22, 2023</span></li>
            <li>Resume 2 - <span>Last updated: Sep 12, 2023</span></li>
            <li>Resume 3 - <span>Last updated: Aug 5, 2023</span></li>
          </ul>
        </section>

        <section className="dashboard-section analytics-section">
          <h2>Analytics</h2>
          <p>Track how many views your resumes have received:</p>
          {/* Include charts/analytics components here if needed */}
          <div className="analytics-overview">
            <p>Resume 1: 120 views</p>
            <p>Resume 2: 80 views</p>
            <p>Resume 3: 65 views</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
