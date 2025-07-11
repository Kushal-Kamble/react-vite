import React, { useState, useRef } from 'react';

/*

🧠 Theory (Hindi में): value vs defaultValue – Controlled vs Uncontrolled

✅ Controlled Component:
Input ka value React ke state (useState) se control hota hai.
Har keypress pe state update hoti hai – UI always React ke under control hoti hai.

🔧 Syntax:
const [email, setEmail] = useState("");
<input value={email} onChange={(e) => setEmail(e.target.value)} />

✅ Uncontrolled Component:
React is input ko control nahi karta – sirf shuru me ek default value milti hai.
Baad me uska data hum useRef() se lete hain.

🔧 Syntax:
const emailRef = useRef();
<input defaultValue="abc@test.com" ref={emailRef} />

🎯 Real-life Analogy:
Controlled = WhatsApp – real-time live typing save hota hai.
Uncontrolled = Paper form – end me pura form submit hota hai.

*/

function DefaultValueVsValue() {
  // ✅ Controlled input ke liye useState
  const [controlledEmail, setControlledEmail] = useState('');

  // ✅ Uncontrolled input ke liye useRef
  const uncontrolledRef = useRef();

  // 🔁 Controlled input update karega
  const handleControlledChange = (e) => {
    setControlledEmail(e.target.value);
  };

  // ✅ Form submit karne par uncontrolled value ko access karein
  const handleSubmit = (e) => {
    e.preventDefault();

    const uncontrolledValue = uncontrolledRef.current.value;

    alert(
      `📧 Controlled Email: ${controlledEmail}\n📧 Uncontrolled Email: ${uncontrolledValue}`
    );
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title mb-3">📌 Controlled vs Uncontrolled Input</h4>

          <form onSubmit={handleSubmit}>
            {/* ✅ Controlled Input */}
            <div className="mb-3">
              <label className="form-label">🔒 Controlled Email</label>
              <input
                type="email"
                className="form-control"
                value={controlledEmail}
                onChange={handleControlledChange}
                placeholder="Type your email (controlled)"
              />
            </div>

            {/* ✅ Uncontrolled Input */}
            <div className="mb-3">
              <label className="form-label">🛠️ Uncontrolled Email</label>
              <input
                type="email"
                className="form-control"
                defaultValue="test@demo.com"
                ref={uncontrolledRef}
                placeholder="Uncontrolled input"
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Submit & Show Values
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DefaultValueVsValue;
