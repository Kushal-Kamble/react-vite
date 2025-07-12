import React from 'react';
import ControlledIndex from './05-controlled-uncontrolled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ControlledIndex />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
