import React, { useState } from 'react';
import { toast } from 'react-toastify';

// 🧠 Theory:
// Hum UI ko condition ke basis par dikhana chahte hain.
// Jaise: agar user login hai to "Welcome", nahi to "Please Login"
// Saath hi toast notification dikhayenge jab user login/logout kare

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login state

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);

    // ✅ Toast message show hoga login/logout ke hisaab se
    // Agar user login hai to success, nahi to error
    // Ye real life me notification jaisa hai jo user ko feedback deta hai
    if (!isLoggedIn) {
      toast.success("Logged in successfully!");
    } else {
      toast.error("Logged out successfully!");
    }
  };

  return (
    <div className="card shadow mb-3">
      <div className="card-body text-center">
        <h5 className="card-title">🔁 Conditional Rendering</h5>

        {/* condition ke basis par different message dikh raha hai */}
        {isLoggedIn ? (
          <p className="text-success">✅ Welcome back, user!</p>
        ) : (
          <p className="text-danger">🚫 Please login to continue.</p>
        )}

        {/* Button click se login/logout state change ho rahi hai */}
        <button className="btn btn-primary" onClick={toggleLogin}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default ConditionalRendering;
