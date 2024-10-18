import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import SummaryCards from './SummaryCards';
import WelcomeHeader from './WelcomeHeader';
import ApplicationChart from './ApplicationChart';
import RecentJobPosts from './RecentJobPosts';
import Footer from './Footer'; // Import Footer component

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        {/* Top Header for Dashboard, Search, etc. */}
        <Header />

        {/* Welcome Header for Welcome Message */}
        <WelcomeHeader />
        
        <div className="dashboard-content">
          <SummaryCards />
          <div className="charts-and-table">
            <div className="application-chart">
              <ApplicationChart />
            </div>
            <div className="recent-job-posts">
              <RecentJobPosts />
            </div>
          </div>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
