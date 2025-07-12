import React from 'react';
import StudentMarksIndex from './08-student-marks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <StudentMarksIndex />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
