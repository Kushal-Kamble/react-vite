import React from 'react';
import AuthStatus from './AuthStatus';


import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
         
      <ToastContainer position="top-center" autoClose={2000} />
        <AuthStatus   />
    </>
  );
}

export default App;
