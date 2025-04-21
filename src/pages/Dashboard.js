import React, { useEffect, useState } from 'react';
import { fetchDashboardData } from '../api/dummyApi';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData().then((dashboardData) => {
      setData(dashboardData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="min-h-screen p-6">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Statistics</h3>
        <ul className="list-disc list-inside">
          <li>Total Users: {data.stats.users}</li>
          <li>Active AI Agents: {data.stats.activeAgents}</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Recent Activities</h3>
        <ul className="list-disc list-inside">
          {data.recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
