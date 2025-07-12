// 📁 File: 09-api-fetch/FetchStudentMarks.jsx

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

/*
🧠 Theory (Hindi में):
Ye component ek fake student REST API se data fetch karta hai.
User jab roll number input karega, to API call hogi aur student ka result dikhaya jayega.

🎯 Real-life Analogy:
Jaise parents school portal pe roll number dal ke result dekhte hain,
waise hi yahan React component + fetch API se real-time result dikhega.
*/

function FetchStudentMarks() {
  const [roll, setRoll] = useState(''); // 🔹 User ka roll number input
  const [student, setStudent] = useState(null); // 🔹 Fetched student data
  const [loading, setLoading] = useState(false); // 🔄 Loading state

  // 🔁 Jab bhi roll number change ho, API call karo
  useEffect(() => {
    if (roll.trim() === '') {
      setStudent(null);
      return;
    }

    setLoading(true);

    // ✅ Fetch API call with roll filter
    fetch(`http://localhost:5000/students?roll=${roll}`)
      .then((res) => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          const s = data[0];
          setStudent(s);
          toast.success(`🎉 ${s.name} found!`);
        } else {
          setStudent(null);
        }
      })
      .catch(() => {
        toast.error('🚫 Failed to fetch');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [roll]);

  return (
    <div className="container mt-4">
      <h4>📘 Student Result Search</h4>

      {/* 🔍 Input: Roll number */}
      <input
        type="text"
        placeholder="Enter Roll Number (e.g. MIT9856262103)"
        className="form-control mb-3"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      {/* ⏳ Loading Message */}
      {loading && <p>⏳ Loading...</p>}

      {/* ❌ Not Found */}
      {!loading && roll && !student && (
        <p className="text-danger">❌ No student found</p>
      )}

      {/* ✅ Student Data */}
      {student && (
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title">👤 {student.name}</h5>
            <p className="card-text">🎓 Class: {student.class}</p>
            <p className="card-text">🪪 Roll No: {student.roll}</p>

            <ul className="list-group mb-3">
              {student.subjects.map((subj, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between"
                >
                  <span>{subj.name}</span>
                  <span className="badge bg-success rounded-pill">
                    {subj.marks} / 100 | 📘 Assignments: {subj.assignmentsDone}/3
                  </span>
                </li>
              ))}
            </ul>

            {/* 🧮 Total Marks */}
            <p className="fw-bold">
              📊 Total Marks: {
                student.subjects.reduce((acc, s) => acc + s.marks, 0)
              } / {student.subjects.length * 100}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchStudentMarks;
