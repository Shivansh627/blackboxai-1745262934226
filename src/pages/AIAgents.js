import React, { useEffect, useState } from 'react';
import { fetchAIAgents } from '../api/dummyApi';

export default function AIAgents() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAIAgents().then((data) => {
      setAgents(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">AI Agents</h2>
      {loading ? (
        <p>Loading AI agents...</p>
      ) : (
        <ul className="space-y-4">
          {agents.map((agent) => (
            <li
              key={agent.id}
              className="p-4 bg-white rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{agent.name}</h3>
              <p className="text-gray-600">{agent.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
