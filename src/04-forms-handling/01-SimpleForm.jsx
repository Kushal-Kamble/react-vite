


import React, { useState } from 'react';
import { toast } from 'react-toastify';

/* 
🔹🧠 Theory:

React me form banana matlab user ke input ko React ke state me store karna.

👉 useState() ek hook hai jo data ko reactively store karta hai.

👉 formData: ek object jisme multiple fields ka data store hota hai (name, email, etc.)

👉 setFormData(): wo function jo formData ko update karta hai jab user kuch type karta hai.

Ye dono ek pair me kaam karte hain: [data, updateFunction]

*/

function SimpleForm() {
  // 🔸 Initial form values set kar rahe hain
  const [formData, setFormData] = useState({
    name: '',   // 👤 User ka naam
    email: ''   // 📧 User ka email
  });

  //   Samjho form me 2 dabbe hain (name aur email), aur tumhara dost (setFormData) har bar check karta hai:
  // "कौन सा डब्बा बदला?" और फिर वहीं पर नई चीज लिख देता है।

  // 🔁 Jab bhi koi input field me kuch change hota hai, ye function chalta hai
  const handleChange = (e) => {
    const { name, value } = e.target; // input ka naam aur value nikal li

    // 🔄 formData object update kar rahe hain
    // prev matlab pehle ka formData
    // [name]: value matlab jis field me typing hui uska value update karna
    setFormData((prev) => ({
      ...prev,          // purane formData ko copy kiya
      [name]: value     // updated field ka value change kiya
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // form submit hone par page reload na ho

    // ❌ Blank name check
    if (formData.name.trim() === '') {
      toast.error('🚫 Name is required!');
      return;
    }

    // ❌ Email format basic check
    if (!formData.email.includes('@')) {
      toast.error('🚫 Enter a valid email!');
      return;
    }

    // ✅ All good
    toast.success(`Welcome ${formData.name}!`);

    // 🔄 Reset form
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title mb-3">📝 Simple Form with Toast Validation</h4>

          <form onSubmit={handleSubmit}>
            {/* 👤 Name Input */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}  // current value
                onChange={handleChange} // update logic
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            {/* 📧 Email Input */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
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
