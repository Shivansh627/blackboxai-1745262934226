import React, { useState } from 'react';
import { register } from '../api/dummyApi';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const newUser = { username, password, email, fullName };
    const response = await register(newUser);
    if (response.success) {
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && (
          <div className="mb-4 text-red-600 font-semibold text-center">{error}</div>
        )}
        {success && (
          <div className="mb-4 text-green-600 font-semibold text-center">{success}</div>
        )}
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
}
