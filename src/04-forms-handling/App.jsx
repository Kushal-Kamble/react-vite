import React from 'react';
import FormsIndex from './04-forms-handling';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <FormsIndex />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
