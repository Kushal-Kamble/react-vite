import React from 'react';
import MainRouter from './14-router/';

import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
         
      <ToastContainer position="top-center" autoClose={2000} />
        <MainRouter    />
    </>
  );
}

export default App;
