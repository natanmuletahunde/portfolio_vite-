/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Header'; // Corrected path
import Footer from './Footer'; // Corrected path
 // Adjust the path as needed
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100 p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the CRUD Application</h1>
        <p className="text-lg text-gray-700 mb-4">
          Manage users efficiently with our simple and intuitive CRUD app.
        </p>
        <div className="space-x-4">
        <Link to="/list" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            List Users
          </Link>
          <Link to="/list" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            List Users
          </Link>
          <Link to="/create" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Create User
          </Link>
          <Link to="/edit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Edit User
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
