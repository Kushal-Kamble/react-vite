import React from 'react';  // ✅ StrictMode ke liye zaroori
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';

// ✅ Toggle Mode: true → StrictMode ON, false → StrictMode OFF
const isStrictMode = false;  // 👈 bas yaha se ON/OFF karo

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  isStrictMode ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);

/*

🔁 isStrictMode variable decide karta hai ki app StrictMode me run ho ya normal mode me

✅ Agar double useEffect, double toast issue ho raha ho to isStrictMode ko false kar do

🚀 Final deployment ke liye true set kar sakte ho for React's safety checks

*/
