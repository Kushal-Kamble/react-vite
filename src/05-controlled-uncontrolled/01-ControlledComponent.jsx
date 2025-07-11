// ControlledComponent.jsx (with inline Hindi theory
// अगर tu beginner hai तो तूने एकदम सही तरीका चुना है सीखने का – theory + code एक साथ रखना.
// जैसे तुमने कहा — full code + inline explanation (Hindi में) ताकि तुम सीधे copy/paste करके समझ सको।

import React, { useState } from 'react';
import { toast } from 'react-toastify';

function ControlledComponent() {
  /*
  🧠 Theory (Component Overview):
  Controlled Component me React state se form inputs ka data manage hota hai.
  Jaise hi user kuch type karta hai, useState() ke through data update hota hai,
  aur UI sync me rehta hai. Ye React ka recommended form handling pattern hai.
  */

  // 🧠 useState() Theory:
  // formData ek object hai jisme form ke sabhi fields ka data store hota hai (name, email etc.)
  // setFormData ek function hai jo formData ko update karta hai.
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // 🧠 handleChange Function Theory:
  // Ye function har input field ke naam (name) aur uski value capture karta hai.
  // [name]: value ka matlab hai: jis field ka naam ho usi ko update karo.
  // Example: name="email" => formData.email update hoga
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,           // purana formData ka data preserve karte hain
      [name]: value      // sirf current field (name ya email) ko update karte hain
    }));
  };

  // 🧠 handleSubmit Theory:
  // Form submit hone par validation hota hai aur Toastify se feedback milta hai
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === '') {
      toast.error('🚫 Name is required!');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('🚫 Invalid email!');
      return;
    }

    toast.success(`✅ Hello ${formData.name}!`);
    setFormData({ name: '', email: '' }); // reset form
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title mb-3">✅ Controlled Component (Form)</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">👤 Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">📧 Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ControlledComponent;
