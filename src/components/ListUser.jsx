/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './Header'; // Corrected path
import Footer from './Footer'; // Corrected path

 function ListUser() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          List of Users
        </h1>
        {/* Add user list here */}
      </main>
      <Footer />
    </div>
  );
}
export default ListUser;
