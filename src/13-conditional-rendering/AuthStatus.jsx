import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*
🧠 Conditional Rendering + Toastify
- Agar login hai to dashboard dikhao
- Warna "Please login" message
- Toasts for Login/Logout
*/

function AuthStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);

    if (!isLoggedIn) {
      toast.success('🎉 Successfully Logged In!');
    } else {
      toast.info('👋 Logged Out!');
    }
  };

  return (
    <div className="container mt-4">
      <h4>🔐 Conditional Rendering + Toast</h4>

      {isLoggedIn ? (
        <div className="alert alert-success">
          ✅ Welcome, you are logged in!
        </div>
      ) : (
        <div className="alert alert-danger">
          ❌ Please login to continue
        </div>
      )}

      <button className="btn btn-primary mt-2" onClick={handleLoginToggle}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default AuthStatus;
