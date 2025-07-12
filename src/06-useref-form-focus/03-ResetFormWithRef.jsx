import React, { useRef } from 'react';
import { toast } from 'react-toastify';

/*

🧠 Theory (Hindi में):

Form inputs ko reset karne ke liye hum normally setState("") use karte hain.
Lekin uncontrolled form me hum directly input field ka value empty karte hain via useRef.

🎯 Real-life:
Jaise ek board me chalk se likha aur baad me duster se saaf kar diya —
Waise hi hum inputRef.current.value = "" se input clean kar dete hain.

*/

function ResetFormWithRef() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleReset = () => {
    // 👇 Direct DOM input fields ko empty kar diya
    nameRef.current.value = '';
    emailRef.current.value = '';

    toast.info("🧹 Form Cleared!");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title mb-3">♻️ Reset Uncontrolled Form using useRef</h4>

          <div className="mb-3">
            <label className="form-label">👤 Name</label>
            <input type="text" ref={nameRef} className="form-control" placeholder="Enter name" />
          </div>

          <div className="mb-3">
            <label className="form-label">📧 Email</label>
            <input type="email" ref={emailRef} className="form-control" placeholder="Enter email" />
          </div>

          <button className="btn btn-secondary" onClick={handleReset}>
            Reset Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetFormWithRef;
