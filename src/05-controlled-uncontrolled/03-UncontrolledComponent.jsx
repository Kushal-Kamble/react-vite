import React, { useRef } from 'react';
import { toast } from 'react-toastify';

// 🧠 Theory:
// Uncontrolled component wo hota hai jahan React input ko control nahi karta.
// ref se hum directly DOM se data nikalte hain.

function UncontrolledComponent() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;

    if (name.trim() === '') {
      toast.error('🚫 Name is empty!');
    } else {
      toast.success(`✅ Hello ${name}!`);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title">📦 Uncontrolled Component</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">👤 Name</label>
              <input type="text" ref={nameRef} className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UncontrolledComponent;
