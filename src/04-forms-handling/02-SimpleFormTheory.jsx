import React, { useState } from 'react';
import { toast } from 'react-toastify';

/* 
🔹🧠 Theory (Hindi Me):

React me jab hum user se data lena chahte hain (jaise name, email, password), 
to hum form banate hain.

✅ is file me hum ek simple form banayenge:
- Name aur Email input fields honge
- Form data ko React ke useState() me store karenge
- Jab user Submit karega to validation hoga:
    👉 Name blank hai? ❌ Error toast
    👉 Email me @ nahi hai? ❌ Error toast
    ✅ Sab sahi hai? Success toast message

React-Toastify ka use karke hum user ko real-time feedback dete hain,
taaki form zyada interactive aur user-friendly lage.

Yeh real-life scenario jaisa hai:
"Form bharne ke baad screen pe turant success ya error message milta hai."

*/

function SimpleForm() {
  // 🔸 formData ek object hai jisme name aur email ki value store hoti hai
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // 🔸 Jab user kisi input box me kuch likhta hai to ye function chalta hai
  // e.target.name = input ka name ("name" ya "email")
  // e.target.value = user ne jo likha hai
  const handleChange = (e) => {
    const { name, value } = e.target;

    // 📌 ...prev ka matlab hai: pehle ka data le lo
    // [name]: value ka matlab hai: jis field me change hua hai uska value update karo
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔸 Form submit hone par validation check hoga
  const handleSubmit = (e) => {
    e.preventDefault(); // page reload hone se rokta hai

    // ❌ Check: Name field khali hai to error toast
    if (formData.name.trim() === '') {
      toast.error('🚫 Name is required!');
      return;
    }

    // ❌ Check: Email me "@" nahi hai to error toast
    if (!formData.email.includes('@')) {
      toast.error('🚫 Enter a valid email!');
      return;
    }

    // ✅ Sab kuch sahi hai to success toast
    toast.success(`✅ Welcome ${formData.name}!`);

    // 🎯 Form ko reset kar diya gaya
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title mb-3">📝 Simple Form with Toast Validation</h4>

          <form onSubmit={handleSubmit}>
            {/* Name Input Field */}
            <div className="mb-3">
              <label className="form-label">👤 Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input Field */}
            <div className="mb-3">
              <label className="form-label">📧 Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default SimpleForm;
