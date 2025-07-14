import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

/*
🛠️ EditStudent.jsx
Ye component existing student ko update karta hai PUT request se
*/

function EditStudent({ selected, onUpdated, onCancel }) {
  const [formData, setFormData] = useState(selected);

  useEffect(() => {
    setFormData(selected);
  }, [selected]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/students/${formData.id}`, formData);
      toast.success("✏️ Student updated!");
      onUpdated();
    } catch (err) {
      toast.error("❌ Update failed");
    }
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h5 className="card-title">✏️ Edit Student</h5>
        <form onSubmit={handleUpdate}>
          <input type="text" name="name" className="form-control mb-2"
            value={formData.name} onChange={handleChange} />
          <input type="email" name="email" className="form-control mb-2"
            value={formData.email} onChange={handleChange} />
          <input type="text" name="phone" className="form-control mb-2"
            value={formData.phone} onChange={handleChange} />
          <input type="text" name="city" className="form-control mb-2"
            value={formData.city} onChange={handleChange} />

          <button className="btn btn-primary me-2">Update</button>
          <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default EditStudent;
