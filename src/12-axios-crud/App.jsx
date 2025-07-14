import React from 'react';
import AxiosStudentCRUD from './12-axios-crud';



import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
         
      <ToastContainer position="top-center" autoClose={2000} />
      <AxiosStudentCRUD />
    </>
  );
}

export default App;
