import React, { useRef } from 'react';
import { toast } from 'react-toastify';

/*

🧠 Theory (Hindi में):

Uncontrolled Component – wo input field hota hai jiska data React ke state se nahi, balki DOM se liya jata hai.
Matlab input field ka value hum state (useState) me nahi rakhte, directly input element se get karte hain.

⚡ useRef ka use karte hain input element ko reference dene ke liye.
Ref ke through input ka value nikaal sakte hain jab zarurat ho (jaise form submit ke time).

🎯 Real-life Example:
Tum ek form pe naam aur email bharte ho, aur jab "Submit" dabate ho tabhi uska data backend ko jaata hai.
Type karte waqt hum data track nahi karte.

*/

function UncontrolledFormRef() {
  // 👇 useRef banaya jo name input ko refer karega
  const nameRef = useRef();

  // 👇 useRef banaya jo email input ko refer karega
  const emailRef = useRef();

  // 🧠 Form submit hone par ye function chalega
  const handleSubmit = (e) => {
    e.preventDefault(); // 🔒 page reload hone se rokta hai

    // 👇 Input field ke andar ka value access kar rahe hain
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    // 🔎 trim() => extra spaces hata deta hai (start & end se)
    // Example: "   Kushal   " => "Kushal"
    if (name.trim() === '') {
      toast.error("🚫 Name is required!");
      return;
    }

    // ✅ Validation pass ho gaya to success toast dikhayenge
    toast.success(`✅ Hello ${name}, your email is ${email}`);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title mb-3">📦 Uncontrolled Form using useRef</h4>

          {/* Form starts here */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">👤 Name</label>
              {/* 🔗 ref se input ka reference diya */}
              <input type="text" ref={nameRef} className="form-control" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label className="form-label">📧 Email</label>
              <input type="email" ref={emailRef} className="form-control" placeholder="Enter your email" />
            </div>

            {/* ✅ Jab yeh button dabega, handleSubmit chalega */}
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UncontrolledFormRef;
