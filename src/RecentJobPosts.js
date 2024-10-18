import React, { useState } from 'react';
import './RecentJobPosts.css';

const RecentJobPosts = () => {
  const [selectedTab, setSelectedTab] = useState('Today');

  // Define all job posts
  const jobPosts = [
    {
      title: 'UI UX Designer',
      category: 'Full Time',
      openings: 12,
      applications: 135,
      status: 'Active'
    },
    {
      title: 'Full Stack Dev',
      category: 'Full Time',
      openings: 0,
      applications: 100,
      status: 'Inactive'
    },
    {
      title: 'DevOps',
      category: 'Internship',
      openings: 10,
      applications: 50,
      status: 'Active'
    },
    {
      title: 'Android Dev',
      category: 'Full Time',
      openings: 4,
      applications: 46,
      status: 'Active'
    },
    {
      title: 'iOS Developer',
      category: 'Full Time',
      openings: 19,
      applications: 96,
      status: 'Inactive'
    }
  ];

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="recent-job-posts">
      <h3>Recent Job Posts</h3>
      <div className="tab-container">
        <button
          className={`tab-button ${selectedTab === 'Today' ? 'active' : ''}`}
          onClick={() => handleTabChange('Today')}
        >
          Today
        </button>
        <button
          className={`tab-button ${selectedTab === 'Weekly' ? 'active' : ''}`}
          onClick={() => handleTabChange('Weekly')}
        >
          Weekly
        </button>
        <button
          className={`tab-button ${selectedTab === 'Monthly' ? 'active' : ''}`}
          onClick={() => handleTabChange('Monthly')}
        >
          Monthly
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Category</th>
            <th>Openings</th>
            <th>Applications</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobPosts.map((post, index) => (
            <tr key={index}>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>{post.openings}</td>
              <td>{post.applications}</td>
              <td>
                <span className={post.status === 'Active' ? 'active' : 'inactive'}>
                  {post.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentJobPosts;
