import React from 'react';
import StudentList from './12-lists-keys/StudentList';

import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
         
      <ToastContainer position="top-center" autoClose={2000} />
        <StudentList  />
    </>
  );
}

export default App;
