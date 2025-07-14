import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

/*
🧠 AddStudent.jsx
Ye component ek naya student add karta hai JSON Server me via Axios POST request
*/

function AddStudent({ onAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.city) {
      toast.error("❌ All fields are required");
      return;
    }

    try {
      await axios.post('http://localhost:5000/students', formData);
      toast.success("✅ Student added!");
      onAdded(); // List reload kare
      setFormData({ name: '', email: '', phone: '', city: '' });
    } catch (err) {
      toast.error("🚫 Failed to add student");
    }
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h5 className="card-title">➕ Add Student</h5>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" className="form-control mb-2"
            value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" className="form-control mb-2"
            value={formData.email} onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone" className="form-control mb-2"
            value={formData.phone} onChange={handleChange} />
          <input type="text" name="city" placeholder="City" className="form-control mb-2"
            value={formData.city} onChange={handleChange} />

          <button className="btn btn-success">Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
