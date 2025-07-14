import React from 'react';
import StudentDirectoryIndex from './10-student-directory';

import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
         
      <ToastContainer position="top-center" autoClose={2000} />
        <StudentDirectoryIndex />
    </>
  );
}

export default App;
