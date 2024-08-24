/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from "react-router-dom";
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';

const App = ()=>{
  return(
    <Routes>
      <Route path="/" exact element={<ListUser />} />
      <Route path="/edit" element={<EditUser />} />
      <Route path="/create" element={<CreateUser />} />
    </Routes>
  )
}

export default App;
