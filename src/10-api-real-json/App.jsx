import React from 'react';
import RealAPIIndex from './10-api-real-json';


import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
         
      <ToastContainer position="top-center" autoClose={2000} />
      <RealAPIIndex />
    </>
  );
}

export default App;
