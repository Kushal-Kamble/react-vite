import React from 'react';
import UseRefIndex from './06-useref-form-focus';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <UseRefIndex />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
