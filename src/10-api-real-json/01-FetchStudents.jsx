// 📁 File: 10-api-real-json/01-FetchStudents.jsx

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

/*
🧠 Theory (Hindi में):

Iss component me hum JSON Server ki local API se data fetch karenge.
Real API jaisa experience milega: /students endpoint se data fetch hoga.

🎯 Real-life Use Case:
Socho tum ek admin dashboard bana rahe ho — jisme tumhe student list dikhani hai
jo backend API se aati ho (JSON Server in our case).

✅ Concepts covered:
- useEffect to fetch data
- Loading & Error state
- API call using fetch()
- Bootstrap card styling
- Toastify for feedback
*/

function FetchStudents() {
  const [students, setStudents] = useState([]);      // 📦 student list
  const [loading, setLoading] = useState(true);      // ⏳ loading flag
  const [error, setError] = useState(null);          // ❌ error flag

  // 🔁 Component mount hone par API call karo
  useEffect(() => {
    fetch('http://localhost:5000/students') // 🔗 local JSON server API
      .then((res) => {
        if (!res.ok) throw new Error('API Failed');
        return res.json(); // 🔄 response ko JSON me convert karo
      })
      .then((data) => {
        setStudents(data); // ✅ data set
        toast.success('✅ Students loaded!');
      })
      .catch((err) => {
        setError(err.message);
        toast.error('❌ Failed to load students!');
      })
      .finally(() => {
        setLoading(false); // ✅ Loading khatam
      });
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="mb-3">🎓 Student List (Real API)</h4>

      {/* ⏳ Agar loading ho to spinner ya message dikhao */}
      {loading && <p>⏳ Loading data...</p>}

      {/* ❌ Agar error aaye to uska message dikhaye */}
      {error && <p className="text-danger">❌ Error: {error}</p>}

      {/* ✅ Student Data Render */}
      <div className="row">
        {students.map((stu) => (
          <div key={stu.id} className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">👤 {stu.name}</h5>
                <p className="card-text">📧 {stu.email}</p>
                <p className="card-text">🏠 {stu.address?.street}, {stu.address?.city}</p>
                <p className="card-text">🌐 {stu.website}</p>
                <span className="badge bg-primary">📱 {stu.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchStudents;
