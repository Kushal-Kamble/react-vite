import React, { useState } from 'react';

/*

🧠 Theory (Hindi में): Password Visibility Toggle

✅ Hum password input field ke liye ek UX feature banayenge – jisme user 👁️ Show ya 🙈 Hide par click kar ke password dekh sakta hai ya chhupa sakta hai.

🎯 Real-life Example:
Bank, Flipkart ya Gmail login screen me ek eye icon hota hai – wahi kaam hum React me karenge.

*/

function PasswordToggle() {
  // 🔐 password naam ka state banaya – jisme user ka type kiya gaya password store hoga
  const [password, setPassword] = useState('');

  // 👁️ showPassword naam ka state banaya – true hoga to password dikhega (text), false hoga to chhupega (password)
  const [showPassword, setShowPassword] = useState(false);

  // 🔁 Jab user password box me kuch type kare – to yeh function state update karega
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 🔄 Eye button click hone par show/hide toggle hoga
  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title mb-3">🔐 Password Show / Hide Example</h4>

          <div className="mb-3">
            <label className="form-label">🔑 Password</label>

            {/* ✅ Bootstrap input-group ka use kiya gaya hai taaki button aur input ek line me ho */}
            <div className="input-group">
              <input
                // 👇 Agar showPassword true hai to type = "text" hoga, warna "password"
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />

              {/* 👁️ Toggle button – text change hoga based on state */}
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={toggleVisibility}
              >
                {showPassword ? '🙈 Hide' : '👁️ Show'}
              </button>
            </div>
          </div>

          {/* 🔍 Optional: Live password preview (learning purpose) */}
          <p className="mt-3">
            <strong>🔓 Your Password: </strong>{password || 'Not typed yet'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PasswordToggle;
