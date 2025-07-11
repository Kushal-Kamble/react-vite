import React, { useState } from 'react';
import { toast } from 'react-toastify';

// 🧠 Theory:
// React me form banana ek common task hai. Hum user se data lete hain 
// aur use validate karke feedback dete hain (jaise toast notifications).
// is example me name aur email input le rahe hain aur toastify se validation dikhate hain.

function SimpleForm() {

  // 📌 useState hook ka use kar ke ek object banaya jisme name aur email value store hogi.
  // formData me user ka input store hota hai
  // setFormData se usse update karte hain
  const [formData, setFormData] = useState({
    name: '',     // 👤 Name input
    email: ''     // 📧 Email input
  });

  // ✅ Jab user input field me kuch likhta hai to ye function chalta hai
  // isme e.target.name dynamic hai - yaani ki "name" ya "email"
  // value uss input ka likha gaya text hai

  const handleChange = (e) => {
    const { name, value } = e.target;

    // prev se purane data ko copy kar rahe hain (...spread operator se)
    // aur jo naya change hai uss input field ka, usse overwrite kar rahe hain
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Jab form submit hota hai (submit button dabaya jata hai)
  // to ye function run hota hai
  const handleSubmit = (e) => {
    e.preventDefault(); // Form reload hone se rokta hai

    // 🧪 Step 1: Name validate karo (blank na ho)
    if (formData.name.trim() === '') {
      toast.error('🚫 Name is required!');
      return; // Aage nahi jaayega
    }

    // 🧪 Step 2: Email validate karo (simple check: @ hona chahiye)
    if (!formData.email.includes('@')) {
      toast.error('🚫 Enter a valid email!');
      return;
    }

    // ✅ Agar dono sahi hai to success toast dikhaye
    toast.success(`✅ Welcome ${formData.name}!`);

    // 🔄 Optional: Form ko reset kar dete hain
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title mb-3">📝 Simple Form with Toast Validation</h4>

          {/* ✅ Form start ho raha hai */}
          <form onSubmit={handleSubmit}>

            {/* Name Input Field */}
            <div className="mb-3">
              <label className="form-label">👤 Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}          // input ka value react state se linked hai
                onChange={handleChange}        // jab user kuch type kare to state update ho
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

            {/* Submit Button */}
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