/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Header'; // Corrected path
import Footer from './Footer'; // Corrected path

 function CreateUser() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Create User
        </h1>
        {/* Add form or user creation functionality here */}
      </main>
      <Footer />
    </div>
  );
}
export default CreateUser;