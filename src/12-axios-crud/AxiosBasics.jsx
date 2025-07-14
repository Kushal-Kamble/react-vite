// ✅ File: 11-axios-crud/AxiosBasics.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

/*
🧠 Theory:
Axios ek popular HTTP client hai jo hum GET, POST, PUT, DELETE request ke liye use karte hain.
Fetch ke comparison me Axios:
✅ Cleaner syntax hota hai
✅ Auto JSON parsing
✅ Error handling easy
✅ Timeout aur interceptors support karta hai
*/

function AxiosBasics() {
  const [students, setStudents] = useState([]);     // 👨‍🎓 Student list
  const [loading, setLoading] = useState(true);     // ⏳ Loading indicator
  const [error, setError] = useState(null);         // ❌ Error state

  // 🔁 API call useEffect me jab component load ho
  useEffect(() => {
    // ✅ Axios GET request
    axios.get('http://localhost:5000/students')
      .then((res) => {
        setStudents(res.data);                // 📥 Data set
        toast.success('✅ Students loaded!');
      })
      .catch((err) => {
        console.error(err);
        setError('🚫 Failed to load data');
        toast.error('🚫 Error fetching students');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mt-4">
      <h4>📚 Axios Basic GET Request</h4>

      {loading && <p>⏳ Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <ul className="list-group">
        {students.map((stu) => (
          <li key={stu.id} className="list-group-item d-flex justify-content-between">
            <span>{stu.name}</span>
            <span className="text-muted">{stu.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosBasics;
