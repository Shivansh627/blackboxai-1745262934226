import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 text-white p-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to AI Agents Platform</h1>
      <p className="text-lg max-w-xl text-center mb-8">
        Explore our AI agents, manage your dashboard, and get started with our platform.
      </p>
      <a
        href="/login"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </div>
  );
}
